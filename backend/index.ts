// 하위 폴더 내부에서 npm을 따로 관리하고 싶으면 npm init -y를 먼저 실행하여 package.json을 생성시킨 후 npm 다운 받아야함.
// module 시스템이 다르기 때문에 CommonJS에서는 require문 사용 가능, TypeScript에서는 사용x, import문 사용
import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import cors from 'cors';

dotenv.config();

const app = express();

if (!process.env.PORT) {
	throw new Error('SESSION_PRIVATE_KEY 환경 변수가 설정되지 않았습니다.');
}

const PORT = process.env.PORT;

if (!process.env.SESSION_PRIVATE_KEY) {
	throw new Error('SESSION_PRIVATE_KEY 환경 변수가 설정되지 않았습니다.');
}

app.use(
	session({
		secret: process.env.SESSION_PRIVATE_KEY,
		resave: false,
		saveUninitialized: false,
		cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 1000 * 60 * 60 * 24 },
	})
);
app.use(cors());
app.use(express.json());

// 특정 주소로 요청이 들어오면 특정 라우트에서 처리. 스프링 RequestMapping 애노테이션처럼 특정 주소 명시
app.use('/post', postRoutes);
app.use('/auth', userRoutes);

app.listen(PORT, () => {
	console.log(PORT + '실행중');
});
