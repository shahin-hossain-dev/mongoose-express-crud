import express from "express";
import { orderController } from "./orders.controller";

const router = express.Router();

router.get("/:userId/orders", orderController.getAllOrderSingleUser);

export const orderRouter = router;
