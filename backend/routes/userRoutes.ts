import { Router } from 'express';
import UserController from '../controllers/userController';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('/signUp', asyncHandler(UserController.registUser));

export default router;
