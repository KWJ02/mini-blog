import UserRepository from '../repositories/UserRepository';
import { ConflictError } from '../utils/CustomError';

interface UserType {
	userId: string;
	userPw: string;
	userName: string;
}

class UserService {
	// ✅ 회원가입 서비스 (비즈니스 로직 담당)
	static async registerUser(dto: UserType) {
		// 1. 사용자 중복 체크
		const existingUser = await UserRepository.findByUserId(dto.userId);
		if (existingUser.length > 0) {
			throw new ConflictError(409, '이미 등록된 사용자 ID 입니다.');
		}
		// 2. 사용자 등록
		const result = await UserRepository.insertUser(dto);
		return { success: true, message: '사용자가 성공적으로 등록되었습니다.', data: result };
	}
}

export default UserService;
