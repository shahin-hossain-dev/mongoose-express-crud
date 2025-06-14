import express from "express";
import { orderController } from "./orders.controller";

const router = express.Router();

router.get("/:userId/orders", orderController.getAllOrderSingleUser);
router.get(
  "/:userId/orders/total-price",
  orderController.getTotalPriceSingleUser,
);

export const orderRouter = router;
