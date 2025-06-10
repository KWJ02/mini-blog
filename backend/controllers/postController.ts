import { Request, Response } from 'express';
import PostService from '../services/PostService';
import { ConflictError } from '../utils/CustomError';

class PostController {
	static async getAllPosts(req: Request, res: Response): Promise<void> {
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
}

// // 게시물 목록을 가져오는 함수
// export const getPosts = async (req: Request, res: Response) => {
// 	try {
// 		const posts = await PostModel.getAllPosts();
// 		res.json(posts); // 클라이언트에 게시물 리스트 반환
// 	} catch (error) {
// 		res.status(500).json({ message: '서버 오류' });
// 	}
// };

export default PostController;
