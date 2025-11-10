
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
        <div className="p-6 space-y-5 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-2">Owner Details</h2>

            <input
                type="text"
                placeholder="Full Name"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-sm"
                required
            />

            <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-sm"
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out shadow-sm"
                required
            />

            <div className="pt-4">
                <button
                    onClick={handleSave}
                    className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out shadow-md"
                >
                    Save Owner Info
                </button>
            </div>
        </div>
    )
}