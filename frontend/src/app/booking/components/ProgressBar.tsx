'use client'
import React from 'react'
import { useBookingStore } from '../store/bookingStore'

const steps = ['Pet Info', 'Booking Info', 'Owner Info', 'Checkout', 'Payment']

export default function ProgressBar() {
  const { step } = useBookingStore()
  
  return (
    <div className="flex justify-between items-center mb-6">
      {steps.map((label, index) => {
        const isActive = step === index + 1
        const isCompleted = step > index + 1
        return (
          <div key={label} className="flex flex-col items-center text-sm">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                isCompleted ? 'bg-green-500 text-white border-green-500'
                : isActive ? 'border-blue-600 text-blue-600'
                : 'border-gray-300 text-gray-400'
              }`}
            >
              {index + 1}
            </div>
            <span className={`mt-1 text-xs ${isActive ? 'text-blue-600 font-semibold' : ''}`}>
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
