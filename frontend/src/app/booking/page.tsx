'use client'

import PageHeader from "../components/ui/PageHeader"

import ProgressBar from './components/ProgressBar'
import StepNavigation from './components/StepNavigation'
import { useBookingStore } from './store/bookingStore'
import PetDetailsCard from './components/PetDetailsCard'
import BookingDetailsCard from './components/BookingDetailsCard'
import OwnerDetailsCard from './components/OwnerDetailsCard'
import OrderSummaryCard from './components/OrderSummaryCard'
import PaymentOptionsCard from './components/PaymentOptionsCard'



export default function BookingPage() {
    const { step } = useBookingStore()

    return (
        <main>
            <PageHeader
                title="Pet Care Booking"
                bgImage="/bookingdog.webp"
            />
            <div className="lg:py-18 md:py-14 py-12">
                <div className="max-w-screen-xl mx-auto lg:px-8 md:px-6 p-6 bg-white rounded-lg shadow-md">
                    <ProgressBar />

                    {step === 1 && <PetDetailsCard />}
                    {step === 2 && <BookingDetailsCard />}
                    {step === 3 && <OwnerDetailsCard />}
                    {step === 4 && <OrderSummaryCard />}
                    {step === 5 && <PaymentOptionsCard />}

                    <StepNavigation />
                </div>
            </div>
        </main>
    )
}
