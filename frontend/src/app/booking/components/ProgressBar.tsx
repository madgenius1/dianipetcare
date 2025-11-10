'use client'
import React from 'react'
import { useBookingStore } from '../store/bookingStore'
import { BiCheck } from 'react-icons/bi'

const steps = ['Pet Info', 'Booking Info', 'Owner Info', 'Confirm', 'Checkout']

export default function ProgressBar() {
  const { step } = useBookingStore()
  
  return (
    <div className="flex justify-between items-center mb-10 relative">
        {/* <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 mx-8 hidden sm:block">
            <div 
                className="h-0.5 bg-blue-600 transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
        </div> */}
      {steps.map((label, index) => {
        const stepNumber = index + 1
        const isActive = step === stepNumber
        const isCompleted = step > stepNumber
        
        return (
          <div key={label} className="flex flex-col items-center z-10">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 
                ${isCompleted 
                    ? 'bg-green-500 text-white shadow-lg'
                    : isActive 
                    ? 'bg-blue-600 text-white ring-4 ring-blue-200 shadow-xl'
                    : 'bg-white border-2 border-gray-300 text-gray-500'
                }`}
            >
              {isCompleted ? <BiCheck className="w-5 h-5"/> : stepNumber}
            </div>
            <span className={`mt-2 text-xs text-center max-w-[80px] transition-colors duration-300 ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`}>
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-7.5 11.25a.75.75 0 0 1-1.154.148l-3.75-3.75a.75.75 0 0 1 1.06-1.06l3.18 3.18 6.94-10.41a.75.75 0 0 1 1.04-.208Z" clipRule="evenodd" />
    </svg>
)