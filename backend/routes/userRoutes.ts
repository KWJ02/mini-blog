import { Router } from 'express';
import UserController from '../controllers/userController';
import asyncHandler from 'express-async-handler';
import { isLoggedIn } from '../middlewares/isLoggedIn';

const router = Router();

router.post('/signUp', asyncHandler(UserController.registUser));
router.post('/signIn', UserController.login);
router.get('/check', UserController.check);
router.post('/logout', isLoggedIn, UserController.logout);

export default router;
