import PostRepository from '../repositories/PostRepository';

class PostService {
	static async getAllPosts() {
		const result = await PostRepository.findAll();
		return result;
	}
}

export default PostService;
