'use client'
import { useBookingStore } from '../store/bookingStore'
import { useState } from 'react'

export default function PetDetailsCard() {
    const { pet, setPet } = useBookingStore()
    const [form, setForm] = useState(pet)

    return (
        <div className="space-y-3">
            <h2 className="text-lg font-semibold">Pet Details</h2>
            <input
                type="text"
                placeholder="Pet Name"
                value={form.name || ''}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Pet Type (Dog, Cat)"
                value={form.type || ''}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="number"
                placeholder="Pet Age"
                value={form.age || ''}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="w-full p-2 border rounded"
                required
            />

            <button
                onClick={() => setPet(form)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Save Pet Info
            </button>
        </div>
    )
}
