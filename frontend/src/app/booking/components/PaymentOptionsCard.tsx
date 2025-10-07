'use client'

export default function PaymentOptionsCard() {
    return (
        <div className="space-y-3">
            <h2 className="text-lg font-semibold">Payment Options</h2>
            <button className="w-full p-3 bg-green-600 text-white rounded-md">Pay with M-Pesa</button>
            <button className="w-full p-3 bg-blue-600 text-white rounded-md">Pay with Card</button>
        </div>
    )
}
