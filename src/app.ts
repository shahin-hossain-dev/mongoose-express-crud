import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRouters } from './app/modules/user/user.route';

const app = express();

app.use(cors());

app.use('/api/users', userRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is Running');
});

export default app;
