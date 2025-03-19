import pool from '../config/db';

interface User {
	userId: string;
	userPw: string;
	userName: string;
}

const UserModel = {};

export default UserModel;
