'use client'
import { useBookingStore } from '../store/bookingStore'

export default function OrderSummaryCard() {
    const { pet, booking, owner } = useBookingStore()

    return (
        <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <p><strong>Pet:</strong> {pet?.name} ({pet?.type})</p>
            <p><strong>Date:</strong> {booking?.date}</p>
            <p><strong>Time:</strong> {booking?.time}</p>
            <p><strong>Service:</strong> {booking?.service}</p>
            <p><strong>Owner:</strong> {owner?.fullName}</p>
            <p><strong>Phone:</strong> {owner?.phone}</p>
        </div>
    )
}
