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

export default redisClient;
