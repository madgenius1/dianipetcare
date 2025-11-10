'use client'

import { useBookingStore } from '../store/bookingStore'

export default function PaymentOptionsCard() {
    const { booking } = useBookingStore()

    return (
        <div className="p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3">Total Cost</h2>
            <p className="flex justify-between pt-2">
                <span className="font-medium capitalize text-gray-600">{booking.service}</span>
                <span className="text-gray-800 capitalize">Price: Ksh 900 </span>
            </p>
            
        </div>
    )
}