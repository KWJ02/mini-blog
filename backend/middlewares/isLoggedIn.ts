import { Request, Response, NextFunction } from 'express';
import { ConflictError } from '../utils/CustomError';

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
	const sessionUser = (req as any).session?.user;
	if (!sessionUser) {
		throw new ConflictError(401, '로그인이 필요합니다.');
	}
	next(); // 로그인 상태면 다음 미들웨어 or 컨트롤러로
}
