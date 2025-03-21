import pool from '../config/db';
import { FieldPacket, PoolConnection, RowDataPacket } from 'mysql2/promise';

interface UserType {
	userId: string;
	userPw: string;
	userName: string;
}

class User {
	static async insertUser(dto: UserType) {
		let conn: PoolConnection | null = null;
		try {
			conn = await pool.getConnection();

			const isDuplicate = await this.checkDuplicateUser(conn, dto.userId);
			if (isDuplicate) {
				return { success: false, message: '이미 존재하는 사용자 ID입니다.' };
			}

			// SQL 상에선 스네이크 케이스 <-> 파스칼 케이스, 카멜 케이스와 혼동x
			const [rows] = await conn.execute('INSERT INTO users (user_id, user_pw, user_name) VALUES (?,?,?)', [
				dto.userId,
				dto.userPw,
				dto.userName,
			]);
			return { rows, success: true, message: '사용자가 성공적으로 등록되었습니다.' };
		} catch (error) {
			throw new Error(error + '');
		} finally {
			if (conn) conn.release();
		}
	}

	static async checkDuplicateUser(conn: PoolConnection, userId: string) {
		try {
			const [rows]: [RowDataPacket[], FieldPacket[]] = await conn.execute(
				`SELECT user_id 
                FROM users
                WHERE user_id=?`,
				[userId]
			);

			return rows.length > 0;
		} catch (error) {
			console.error(error);
			throw new Error(error + '');
		}
	}
}

export default User;
