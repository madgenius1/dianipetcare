import express from 'express';
import cors from 'cors';
import bookingRoutes from './routes/booking';
import paymentRoutes from './routes/payment';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

export default app;
