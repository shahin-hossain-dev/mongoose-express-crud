import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

//get routes

router.get('/', userController.getAllUser);

//post routes
router.post('/', userController.createNewUser);

export const userRouters = router;
