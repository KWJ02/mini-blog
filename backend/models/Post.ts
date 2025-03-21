// import PostDummy from '../dummy/dummy';
import pool from '../config/db';

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
	date: string;
}

const PostModel = {
	getAllPosts: async (): Promise<Post[]> => {
		const [rows] = await pool.query(
			'SELECT id, title, content, user_name as userName, DATE_FORMAT(COALESCE(update_date, create_date), "%Y-%m-%d") AS date FROM posts'
		);
		return rows as Post[];
	},
};

export default PostModel;
