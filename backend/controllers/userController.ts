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
			res.status(200).json({ user: result });
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
