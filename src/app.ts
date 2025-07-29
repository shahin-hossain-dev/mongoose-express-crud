import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/router/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import routeNotFound from "./app/middleware/routeNotFound";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello! I'm User management Server. I'm running");
});

//all routers here
app.use("/api", router);

app.use(globalErrorHandler);

app.use(routeNotFound);

export default app;
