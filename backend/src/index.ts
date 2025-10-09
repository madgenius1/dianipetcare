import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const start = async () => {
  await payload.init({
    config: require('./payload.config').default,
  });

  console.log(`✅ Payload Admin ready at ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
};

start();
