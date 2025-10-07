'use client'
import { useBookingStore } from '../store/bookingStore'
import { useState } from 'react'

export default function OwnerDetailsCard() {
    const { owner, setOwner } = useBookingStore()
    const [form, setForm] = useState(owner)

    const handleSave = () => {
        setOwner(form)
    }

    return (
        <div className="space-y-3">
            <h2 className="text-lg font-semibold">Owner Details</h2>

            <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Save Owner Info
            </button>
        </div>
    )
}
