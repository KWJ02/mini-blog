import { Request, Response } from 'express';
import PostService from '../services/PostService';
import { ConflictError } from '../utils/CustomError';

interface SessionUser {
	userId: string;
	userName: string;
}

class PostController {
	// 안쓰는건 아예 안쓰거나 그냥 _가 아니라 _req 나 _res로 안쓴다는 컨벤션 사용
	static async getAllPosts(_req: Request, res: Response): Promise<void> {
		try {
			const posts = await PostService.getAllPosts();
			res.status(200).json(posts);
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}

	static async getOnePosts(req: Request, res: Response): Promise<void> {
		try {
			const id = req.params.id;
			const posts = await PostService.getOnePost(Number(id));
			res.status(200).json(posts);
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}

	static async registPost(req: Request, res: Response): Promise<void> {
		try {
			const { title, content } = req.body;
			const user = req.session.user as SessionUser; // 세션에서 꺼냄
			const userId = user.userId;

			await PostService.registPost({ title, content, userId });
			res.sendStatus(201);
		} catch (error) {
			if (error instanceof ConflictError) {
				res.status(error.status).json({ message: error.message });
			} else {
				res.status(500).json({ message: 'Server Error' });
			}
		}
	}
}

export default PostController;
