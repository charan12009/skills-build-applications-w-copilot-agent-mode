import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './routes/api.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());
app.use('/api', apiRouter);

async function bootstrap() {
  await mongoose.connect(mongoUri);
  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

bootstrap().catch((error: unknown) => {
  console.error('Failed to start backend:', error);
  process.exit(1);
});
