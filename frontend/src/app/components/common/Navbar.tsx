'use client'

import Link from "next/link"
import Image from "next/image";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";



export default function Navbar() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const toggleDropDownOpen = () => setIsDropDownOpen(prev => !prev);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    return (
        <nav className="sticky top-0 z-50 bg-[#f6f2e9]">
            <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex justify-start px-4">
                    <Link href="/">
                        <Image
                            src="/headerlogo.jpg"
                            alt="diani pet care logo"
                            width={100}
                            height={60}
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:justify-center space-x-6">
                    <Link href="/services" className="text-gray-950 font-semibold hover:underline">Services</Link>
                    <Link href="/booking" className="text-gray-950 font-semibold hover:underline">Booking</Link>
                    <Link href="/packages" className="text-gray-950 font-semibold hover:underline">Care Packages</Link>
                    <Link href="/about" className="text-gray-950 font-semibold hover:underline">About</Link>
                </div>
                <div className="md:hidden ">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <RiCloseLargeFill size={30} className="text-neutral-800" />
                        ) : (
                            <RiMenu3Fill size={30} className="text-neutral-800" />
                        )}
                    </button>
                </div>

                <div className="lg:flex md:flex hidden justify-end">
                    <Link href="/contact" className="px-8 py-4 
                text-lg font-bold 
                bg-amber-400 text-gray-900 
                rounded-xl 
                hover:bg-amber-300 transition duration-300 
                shadow-xl 
                transform hover:scale-[1.03] hover:underline">Contact</Link>
                </div>

                <div
                    className={`absolute left-0 w-full transition-all duration-400 ease-in-out md:hidden bg-neutral-500 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg ${isMobileMenuOpen
                        ? 'top-full opacity-100 visible'
                        : '-top-96 opacity-0 invisible'
                        }`}
                >
                    <ul className="flex flex-col p-6 space-y-4 list-none">
                        <li><Link href="/services" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Services</Link></li>
                        <li><Link href="/booking" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Booking</Link></li>
                        <li><Link href="/packages" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Care Packages</Link></li>
                        <li><Link href="/about" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>About Us</Link></li>
                        <li><Link href="/contact" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Contact Us</Link></li>
                        <li><Link href="/privacy" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Privacy Policy</Link></li>
                        <li><Link href="/terms" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}