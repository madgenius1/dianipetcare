import { Request, Response } from 'express';
import payload from 'payload';

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { bookingId, amount, method } = req.body;

    const payment = await payload.create({
      collection: 'payments',
      data: { booking: bookingId, amount, method, status: 'pending' },
    });

    // Here you’ll integrate M-Pesa Daraja API later

    return res.status(201).json({ success: true, payment });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Payment failed to initialize' });
  }
};
