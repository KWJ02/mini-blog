// 하위 폴더 내부에서 npm을 따로 관리하고 싶으면 npm init -y를 먼저 실행하여 package.json을 생성시킨 후 npm 다운 받아야함.
// module 시스템이 다르기 때문에 CommonJS에서는 require문 사용 가능, TypeScript에서는 사용x, import문 사용
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import checkEnv from './utils/checkEnv';
import cors from 'cors';
import { RedisStore } from 'connect-redis';
import redisClient from './config/redis';
import type {} from './types/express-session';

dotenv.config();
checkEnv();

const app = express();

const redisStore = new RedisStore({
	client: redisClient,
});

app.use(
	session({
		store: redisStore,
		// 환경변수 ! => Non-null Assertion (checkEnv 함수 실행 -> 반드시 null이 아님을 명시)
		secret: process.env.SESSION_PRIVATE_KEY!,
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: false, // HTTPS 안 쓰면 false로 해야 함 (개발환경)
			sameSite: 'lax', // 'strict'이면 안 올 수도 있음,
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

app.use(
	cors({
		origin: 'http://localhost:3000', // or your frontend URL
		credentials: true, // ← 이거 중요!
	})
);
app.use(express.json());

// 특정 주소로 요청이 들어오면 특정 라우트에서 처리. 스프링 RequestMapping 애노테이션처럼 특정 주소 명시
app.use('/post', postRoutes);
app.use('/auth', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(PORT + '실행중');
});

// 테스트 라우트
app.get('/check-login', (req, res) => {
	if (req.session.user) {
		res.send(`로그인된 사용자: ${req.session.user.userId} ${req.session.user.userName}`);
	} else {
		res.status(401).send('로그인 안 됨');
	}
});
