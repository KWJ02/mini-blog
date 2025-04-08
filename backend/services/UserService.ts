import { RowDataPacket } from 'mysql2';
import UserRepository from '../repositories/UserRepository';
import { ConflictError } from '../utils/CustomError';
import { Request } from 'express';

/**
 * DTO : DB에 저장하거나 다른 계층으로 전달하는 역할을 하는 객체
 * 이 속성들은 DB에 저장하기 위해 전달되는 용도이므로 DTO로 선언
 */
interface UserDTO {
	userId: string;
	userPw: string;
	userName: string;
}

/**
 * DAO : DB에서 가져오거나 저장하는 역할을 하는 객체
 * 이 속성들은 DB에서 가져와 존재하는 계정인지 확인하는 용도이므로 DAO로 선언
 */
interface UserDAO {
	userId: string;
	userPw: string;
}

class UserService {
	// ✅ 회원가입 서비스 (비즈니스 로직 담당)
	static async registerUser(dto: UserDTO) {
		// 1. 사용자 중복 체크
		const existingUser = await UserRepository.findByUserId(dto.userId);
		if (existingUser) {
			throw new ConflictError(409, '이미 등록된 사용자 ID 입니다.');
		}
		// 2. 사용자 등록
		await UserRepository.insertUser(dto);
		return { message: '회원가입이 완료되었습니다.' };
	}

	static async login(req: Request, dao: UserDAO) {
		const user = (await UserRepository.findRegistUser(dao.userId, dao.userPw)) as RowDataPacket[];
		if (user.length === 0) {
			throw new ConflictError(404, '아이디 또는 비밀번호가 일치하지 않습니다.');
		}
		(req as any).session.user = { userId: user[0].user_id, userName: user[0].user_name };
	}

	static async check(req: Request) {
		const session = (req as any).session?.user;
		if (!session) {
			throw new ConflictError(401, '로그인을 해주세요.');
		}

		return { userId: session.userId, userName: session.userName };
	}
}

export default UserService;
