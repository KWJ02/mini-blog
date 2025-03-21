import { Request, Response } from 'express';
import User from '../models/User';

class UserController {
	static async registUser(req: Request, res: Response): Promise<void> {
		const dto = {
			userId: req.body.userId,
			userPw: req.body.userPw,
			userName: req.body.userName,
		};
		try {
			const result = await User.insertUser(dto);

			if (!result.success) {
				res.status(409).json({ messsage: '이미 등록된 사용자 ID 입니다.' });
			}

			res.status(201).json(result);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Server Error' });
		}
	}
}

export default UserController;
