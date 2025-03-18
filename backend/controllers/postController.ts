import { Request, Response } from 'express';
import PostModel from '../models/postModel';

// 게시물 목록을 가져오는 함수
export const getPosts = async (req: Request, res: Response) => {
	try {
		const posts = await PostModel.getAllPosts();
		res.json(posts); // 클라이언트에 게시물 리스트 반환
	} catch (error) {
		res.status(500).json({ message: '서버 오류' });
	}
};
