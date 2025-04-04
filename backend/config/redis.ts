import { createClient } from 'redis';
import dotenv from 'dotenv';
import checkEnv from '../utils/checkEnv';

dotenv.config();
checkEnv();

const redisClient = createClient({
	username: process.env.REDIS_USERNAME,
	password: process.env.REDIS_PASSWORD,
	socket: {
		host: process.env.REDIS_HOST,
		port: Number(process.env.REDIS_PORT),
	},
});

redisClient.connect().catch(console.error);

// redis 연결 테스트 함수(o)
// async function main() {
// 	await redisClient.set('testKey', 'testValue');
// 	const value = await redisClient.get('testKey');
// 	console.log(value);
// }

// main().catch(console.error);

export default redisClient;
