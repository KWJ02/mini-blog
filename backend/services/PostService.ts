import PostRepository from '../repositories/PostRepository';
import { postDTO } from '../types/post';

class PostService {
	static async getAllPosts() {
		const result = await PostRepository.findAll();
		return result;
	}

	static async registPost({ title, content, userId }: postDTO) {
		const result = await PostRepository.registPost({ title, content, userId });
		return result;
	}
}

export default PostService;
