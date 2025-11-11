'use client'
import { useBookingStore } from '../store/bookingStore'
import { SERVICE_PRICES } from '@/app/types/services'

export default function PaymentOptionsCard() {
  const { booking } = useBookingStore()
  const { service } = booking

  const price = service ? SERVICE_PRICES[service] : 0

  return (
    <div className="p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-3">
        Total Cost
      </h2>

      {service ? (
        <div className="flex justify-between items-center pt-2">
          <span className="font-medium capitalize text-gray-600">
            {service.replace(/^\w/, (c) => c.toUpperCase())}
          </span>
          <span className="text-gray-800 font-semibold">
            Ksh {price.toLocaleString()}
          </span>
        </div>
      ) : (
        <p className="text-gray-500 italic">No service selected</p>
      )}
    </div>
  )
}
