import payload from 'payload';
import { connectDB } from './config/db';
import { ENV } from './config/env';
import app from './app';

const start = async () => {
  await connectDB();

  await payload.init({
    secret: ENV.PAYLOAD_SECRET,
    mongoURL: ENV.MONGO_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`🚀 Payload Admin available at /admin`);
    },
  });

  app.listen(ENV.PORT, () => {
    console.log(`✅ Server running at http://localhost:${ENV.PORT}`);
  });
};

start();
