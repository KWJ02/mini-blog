import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { ConflictError } from '../utils/CustomError';

class UserController {
	static async registUser(req: Request, res: Response): Promise<void> {
		try {
			const result = await UserService.registerUser(req.body);

			res.status(201).json(result);
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}

	static async login(req: Request, res: Response): Promise<void> {
		try {
			const result = await UserService.login(req, req.body);
			res.status(200).json({ message: result });
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}

	static async logout(req: Request, res: Response) {
		try {
			req.session.destroy((err) => {
				if (err) {
					throw new Error('Server Error');
				}
				res.clearCookie('connect.sid');
				res.status(200).json({ message: '로그아웃 성공' });
			});
		} catch (error) {
			res.status(500).json(error);
		}
	}

	static async check(req: Request, res: Response) {
		try {
			const result = await UserService.check(req);
			res.status(200).json(result);
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}
}

export default UserController;
