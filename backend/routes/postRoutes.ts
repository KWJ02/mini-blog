import { Router } from 'express';
import PostController from '../controllers/postController';
import { isLoggedIn } from '../middlewares/isLoggedIn';

const router = Router();

/**
 * PostRoutes는 index.ts에서 /post 주소로 오는 라우트를 처리하는 곳.
 * Nesting이 되므로 router.get('/')는 /post/ 주소의 get 함수에 대한 처리를 하고 있는거임.
 * 게시물 목록을 가져오는 API
 */
router.get('/', PostController.getAllPosts);
router.post('/regist', isLoggedIn, PostController.registPost);

export default router;
