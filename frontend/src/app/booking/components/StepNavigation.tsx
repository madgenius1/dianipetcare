'use client'
import React from 'react'
import { useBookingStore } from '../store/bookingStore'

export default function StepNavigation() {
    const { step, setStep } = useBookingStore()

    return (
        <div className="flex justify-between mt-8">
            <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
            >
                Back
            </button>

            {step < 5 ? (
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    onClick={() => setStep(step + 1)}
                >
                    Next
                </button>
            ) : (
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md"
                    onClick={() => alert('Payment complete')}
                >
                    Finish
                </button>
            )}
        </div>
    )
}
