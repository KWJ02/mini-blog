// backend/routes/postRoutes.ts
import { Router } from 'express';
import { getPosts } from '../controllers/postController';

const router = Router();

// 게시물 목록을 가져오는 API
router.get('/', getPosts);

export default router;
