// import PostDummy from '../dummy/dummy';
import { ResultSetHeader } from 'mysql2';
import { PoolConnection } from 'mysql2/promise';
import pool from '../config/db';
import { postDTO } from '../types/post';

interface Post {
	id: number;
	title: string;
	content: string;
	userId: number;
	userName: string;
	date: string;
}

class PostRepository {
	static async findAll(): Promise<Post[]> {
		// posts 테이블 내 user_name 칼럼삭제
		let conn: PoolConnection | null = null;
		try {
			conn = await pool.getConnection();
			const [rows] = await conn.query(
				`
			select id, title, content, p.user_id as userId, u.user_name as userName, DATE_FORMAT(GREATEST(create_date, update_date), '%Y-%m-%d') as date
			from posts p
			join users u
			on p.user_id = u.user_id;
			`
			);
			return rows as Post[];
		} catch (error) {
			throw new Error(error + '');
		} finally {
			conn?.release();
		}
	}

	static async registPost({ title, content, userId }: postDTO) {
		let conn: PoolConnection | null = null;
		try {
			conn = await pool.getConnection();
			const sql = 'INSERT INTO posts (title, content, user_id, create_date) VALUES (?,?,?,?)';
			const [result] = await conn.execute<ResultSetHeader>(sql, [title, content, userId, new Date()]);
			return result.insertId;
		} catch (err) {
			console.error('Insert 실패:', err);
			throw err;
		} finally {
			conn?.release();
		}
	}
}

export default PostRepository;
