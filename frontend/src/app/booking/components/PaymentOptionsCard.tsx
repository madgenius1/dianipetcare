'use client'

export default function PaymentOptionsCard() {
    return (
        <div className="p-6 space-y-4 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-3">Payment Options</h2>

            <button
                className="w-full p-4 bg-green-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-green-700 transition duration-150 ease-in-out"
            >
                Pay with M-Pesa
            </button>
            <button
                className="w-full p-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-blue-700 transition duration-150 ease-in-out"
            >
                Pay with Card
            </button>
        </div>
    )
}