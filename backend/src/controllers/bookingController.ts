import { Request, Response } from 'express';
import payload from 'payload';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = await payload.create({
      collection: 'bookings',
      data: req.body,
    });
    return res.status(201).json({ success: true, booking });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Error creating booking' });
  }
};

export const getBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await payload.find({ collection: 'bookings' });
    return res.json(bookings);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error fetching bookings' });
  }
};
