import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

//get routes

router.get("/all-users", userController.getAllUser);

router.get("/:userId", userController.getSingleUser);

//post routes
router.post("/createNewUser", userController.createNewUser);

//put routes

router.put("/:userId", userController.updateUser);

export const userRouters = router;
