import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRouters } from './app/modules/user/user.route';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Hello! I'm User management Server. I'm running");
});

app.use('/api/users', userRouters);

export default app;
