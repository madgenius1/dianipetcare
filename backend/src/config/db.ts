import mongoose from 'mongoose';
import { ENV } from './env';

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Failed', err);
    process.exit(1);
  }
};
