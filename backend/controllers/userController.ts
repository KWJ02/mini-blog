import { Request, Response } from 'express';
import userModel from '../models/userModel';

export const registUser = async (req: Request, res: Response) => {
	try {
		const posts = await userModel;
		res.json(posts); // 클라이언트에 게시물 리스트 반환
	} catch (error) {
		res.status(500).json({ message: '서버 오류' });
	}
};
