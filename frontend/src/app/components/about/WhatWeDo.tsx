
import Link from "next/link"

const services = [
    { title: "Dog Walking", description: "Perfect for active dogs of all breeds who need regular exercise and outdoor stimulation." },
    { title: "Pet Grooming", description: "Perfect for pets needing regular hygiene care and coat maintenance." },
    { title: "Pet Sitting", description: "For pet parents working long hours or traveling who want reliable home care." },
    { title: "Pet Transport", description: "Perfect for pet owners who need help transporting pets safely around Diani or Ukunda." },
    { title: "Pet Boarding", description: "Great for pets staying several days or weeks, ensuring comfort and playtime." },
    { title: "Pet Training", description: "Ideal for puppies or dogs needing obedience, socialization, or behavior correction." }
]

export default function WhatWeDo() {
    return (
        <div className="py-12 md:py-16 lg:py-18 overflow-hidden">
            <div className="max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4">
                <h2 className="text-xl text-center lg:text-5xl md:text-2xl font-bold text-gray-950">
                    What We Do
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 lg:gap-8 gap-4 py-12">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col space-y-4 shadow-lg p-4 rounded-lg transition duration-300 transform hover:scale-[1.03] bg-white">
                            <h1 className="text-lg lg:text-xl text-blue-700 font-semibold">
                                {service.title}
                            </h1>
                            <p className="text-md text-gray-800 font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="py-10 flex items-center lg:flex-row md:flex-row flex-col gap-4 justify-center">
                    <Link
                        href="/booking"
                        className="mt-4 px-10 py-6 text-lg font-bold bg-amber-400 text-gray-900 rounded-xl hover:bg-amber-300 transition duration-300 shadow-xl transform hover:scale-[1.03]"
                    >
                        Book Service
                    </Link>
                    <Link
                        href="/packages"
                        className="mt-4 px-10 py-6 text-lg font-bold bg-amber-400 text-gray-900 rounded-xl hover:bg-amber-300 transition duration-300 shadow-xl transform hover:scale-[1.03]"
                    >
                        Care Packages
                    </Link>
                </div>
            </div>
        </div>
    )
}