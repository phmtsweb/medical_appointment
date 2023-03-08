import express from 'express';
import { userRouter } from './routes/user.routes';

const PORT = 3333;

const app = express();

app.use(express.json());
app.use('/users', userRouter);

app.get('/', (request, response) => {
  response.send('Hello world');
});



app.listen(PORT, () => console.log(`🔥 Server is running on http://localhost:${PORT}`));
