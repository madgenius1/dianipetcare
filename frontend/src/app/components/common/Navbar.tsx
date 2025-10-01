
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="lg:px-8 md:px-6 px-4 py-5 max-w-screen-xl mx-auto sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
            <div className="flex items-center justify-between ">
                <div className="flex justify-start">
                    <Link href="/" className="text-gray-950 font-medium">Diani Pet Care</Link>
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-between space-x-6">
                        <Link href="/services" className="text-gray-800 font-medium hover:underline">Services</Link>
                        <Link href="/booking" className="text-gray-800 font-medium hover:underline">Booking</Link>
                        <Link href="/about" className="text-gray-800 font-medium hover:underline">About</Link>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Link href="/contact" className="hover:text-gray-800 hover:bg-gray-100 rounded-md px-6 py-3 font-medium hover:underline">About</Link>
                </div>
            </div>
        </nav>
    )
}