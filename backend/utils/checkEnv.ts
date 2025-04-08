import dotenv from 'dotenv';
dotenv.config();

/**
 * 환경변수 값 유효성 판정 함수
 */
const checkEnv = () => {
	if (!process.env.SESSION_PRIVATE_KEY) {
		throw new Error('SESSION_PRIVATE_KEY 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.PORT) {
		throw new Error('PORT 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.DB_HOST) {
		throw new Error('DB_HOST 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.DB_USER) {
		throw new Error('DB_USER 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.DB_PASSWORD) {
		throw new Error('DB_PASSWORD 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.DB_DATABASE) {
		throw new Error('DB_DATABASE 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.REDIS_HOST) {
		throw new Error('REDIS_HOST 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.REDIS_PORT) {
		throw new Error('REDIS_PORT 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.REDIS_USERNAME) {
		throw new Error('REDIS_USERNAME 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.REDIS_PASSWORD) {
		throw new Error('REDIS_PASSWORD 환경 변수가 설정되지 않았습니다.');
	}

	if (!process.env.CORS_ORIGIN) {
		throw new Error('CORS_ORIGIN 환경 변수가 설정되지 않았습니다.');
	}
};

export default checkEnv;
