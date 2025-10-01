
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="sticky top-0 max-w-screen-xl mx-auto z-50 lg:px-8 md:px-6 px-4 py-6 bg-transparent shadow-lg">
            <div className="flex items-center justify-start">
                <h3 className="text-gray-950 font-medium">Diani Pet Care</h3>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex justify-between space-x-3">
                    <Link href="/services" className="text-gray-800 font-medium hover:underline">Services</Link>
                    <Link href="/booking" className="text-gray-800 font-medium hover:underline">Booking</Link>
                    <Link href="/about" className="text-gray-800 font-medium hover:underline">About</Link>
                </div>
            </div>
            <div className="flex justify-end">
                <Link href="/contact" className="hover:text-gray-800 hover:bg-gray-100 rounded-md px-6 py-3 font-medium hover:underline">About</Link>
            </div>
        </nav>
    )
}