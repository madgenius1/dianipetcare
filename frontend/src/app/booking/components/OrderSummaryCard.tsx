'use client'
import { useBookingStore } from '../store/bookingStore'

export default function OrderSummaryCard() {
    const { pet, booking, owner } = useBookingStore()

    return (
        <div className="p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3">Order Summary</h2>
            
            <div className="space-y-3 divide-y divide-gray-100">
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Pet:</span> 
                    <span className="text-gray-800">{pet.name} ({pet.type}, {pet.age} Months)</span>
                </p>
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Service:</span> 
                    <span className="text-gray-800 capitalize">{booking.service}</span>
                </p>
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Date & Time:</span> 
                    <span className="text-gray-800">{booking.date} at {booking.time}</span>
                </p>
            </div>

            <div className="space-y-3 divide-y divide-gray-100 pt-4 border-t">
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Owner:</span> 
                    <span className="text-gray-800">{owner.fullName}</span>
                </p>
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Phone:</span> 
                    <span className="text-gray-800">{owner.phone}</span>
                </p>
                <p className="flex justify-between pt-2">
                    <span className="font-medium text-gray-600">Email:</span> 
                    <span className="text-gray-800">{owner.email}</span>
                </p>
            </div>
        </div>
    )
}