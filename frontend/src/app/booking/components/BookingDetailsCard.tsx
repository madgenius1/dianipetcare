'use client'
import { useBookingStore  } from '../store/bookingStore'
import { ServiceType } from '@/app/types/services'
import { useState } from 'react'

export default function BookingDetailsCard() {
  const { booking, setBooking } = useBookingStore()
  const [form, setForm] = useState(booking)

  const handleSave = () => {
    setBooking(form)
  }

  const serviceOptions: { label: string; value: ServiceType }[] = [
    { label: 'Pet Grooming', value: 'grooming' },
    { label: 'Dog Walking', value: 'walking' },
    { label: 'Pet Sitting', value: 'sitting' },
    { label: 'Pet Transport', value: 'transport' },
    { label: 'Pet Boarding', value: 'boarding' },
    { label: 'Dog Training', value: 'training' },
  ]

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

      <select
        value={form.time}
        onChange={(e) => setForm({ ...form, time: e.target.value })}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Time</option>
        {[
          '8:30 AM',
          '9:00 AM',
          '10:00 AM',
          '11:00 AM',
          '12:00 PM',
          '1:00 PM',
          '2:00 PM',
          '3:00 PM',
          '4:00 PM',
          '4:30 PM',
        ].map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <select
        value={form.service}
        onChange={(e) =>
          setForm({ ...form, service: e.target.value as ServiceType })
        }
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Select Service</option>
        {serviceOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer active:bg-gray-900"
      >
        Save Booking Info
      </button>
    </div>
  )
}
