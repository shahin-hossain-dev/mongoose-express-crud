import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//get routes

router.get('/', userController.getAllUser);

//post routes
router.post('/createNewUser', userController.createNewUser);

export const userRouters = router;
