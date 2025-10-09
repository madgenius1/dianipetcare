import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  MONGO_URI: process.env.MONGO_URI!,
  PORT: process.env.PORT || '5000',
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET!,
  FRONTEND_URL: process.env.FRONTEND_URL!,
};
