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
		// posts 테이블 내 user_name 칼럼삭제
		const [rows] = await pool.query(
			`
			select id, title, content, p.user_id as userId, u.user_name as userName, DATE_FORMAT(GREATEST(create_date, update_date), '%Y-%m-%d') as date
			from posts p
			join users u
			on p.user_id = u.user_id;
			`
		);
		return rows as Post[];
	},
};

export default PostModel;
