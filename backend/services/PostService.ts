import PostRepository from '../repositories/PostRepository';
import { postDTO } from '../types/post';
import CryptoJS from 'crypto-js';

class PostService {
	static async getAllPosts() {
		const result = await PostRepository.findAll();

		const encryptedResult = result.map((post) => {
			const encryptedId = CryptoJS.AES.encrypt(post.id.toString(), process.env.SECRET_KEY as string).toString();
			return {
				...post,
				id: encryptedId,
			};
		});

		return encryptedResult;
	}

	static async getOnePost(encryptedId: string) {
		const bytes = CryptoJS.AES.decrypt(encryptedId, process.env.SECRET_KEY as string);
		const decryptedId = parseInt(bytes.toString(CryptoJS.enc.Utf8), 10);

		const result = await PostRepository.findById(decryptedId);
		return result;
	}

	static async registPost({ title, content, userId }: postDTO) {
		const result = await PostRepository.registPost({ title, content, userId });
		return result;
	}
}

export default PostService;
