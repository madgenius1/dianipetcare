'use client'
import { useBookingStore } from '../store/bookingStore'
import { useState } from 'react'

export default function BookingDetailsCard() {
    const { booking, setBooking } = useBookingStore()
    const [form, setForm] = useState(booking)

    const handleSave = () => {
        setBooking(form)
    }

    return (
        <div className="space-y-3">
            <h2 className="text-lg font-semibold">Booking Details</h2>

            <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full p-2 border rounded"
                required
            >
                <option value="">Select Service</option>
                <option value="grooming">Grooming</option>
                <option value="walk">Dog Walk</option>
                <option value="vet">Vet Check</option>
            </select>

            <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Save Booking Info
            </button>
        </div>
    )
}
