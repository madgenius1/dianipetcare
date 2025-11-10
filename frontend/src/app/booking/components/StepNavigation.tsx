'use client'
import React from 'react'
import { useBookingStore } from '../store/bookingStore'

export default function StepNavigation() {
    const { step, setStep } = useBookingStore()

    return (
        <div className="flex justify-between mt-10 pt-4 border-t border-gray-100">
            <button
                className="px-6 py-3 bg-gray-100 text-gray-700 active:bg-gray-900 font-semibold rounded-lg cursor-pointer hover:bg-gray-200 transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
            >
                ← Back
            </button>

            {step < 5 ? (
                <button
                    className="px-6 py-3 bg-blue-600 cursor-pointer active:bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-150"
                    onClick={() => setStep(step + 1)}
                >
                    Next →
                </button>
            ) : (
                <button
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150"
                    onClick={() => alert('Booking Received')}
                >
                    Finish
                </button>
            )}
        </div>
    )
}