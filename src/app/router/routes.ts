import { Router } from "express";
import { orderRouter } from "../modules/orders/order.routes";
import { userRouters } from "../modules/user/user.route";

const router = Router();

const routerModules = [
  {
    path: "/users",
    route: userRouters,
  },
  {
    path: "/users",
    route: orderRouter,
  },
];

routerModules.forEach(route => router.use(route.path, route.route));

export default router;
