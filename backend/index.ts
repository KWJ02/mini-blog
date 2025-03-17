// 하위 폴더 내부에서 npm을 따로 관리하고 싶으면 npm init -y를 먼저 실행하여 package.json을 생성시킨 후 npm 다운 받아야함.
// module 시스템이 다르기 때문에 CommonJS에서는 require문 사용 가능, TypeScript에서는 사용x, import문 사용
import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// /post 주소로 요청이 들어오면 postRoutes 라우트에서 처리. 스프링 RequestMapping 애노테이션처럼 특정 주소 명시
app.use('/post', postRoutes);

app.listen(PORT, () => {
	console.log(PORT + '실행중');
});
