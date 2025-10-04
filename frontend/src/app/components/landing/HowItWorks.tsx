

import Link from "next/link"

const petdetails =
    [
        { number: 1, statement: "Tell us about your pet." },
        { number: 2, statement: "Pick the service, date, and time." },
        { number: 3, statement: "Confirm booking and make payment." },
    ]


export default function HowItWorks() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center tracking-tight">
                    Pet Care Made Easier
                </h2>

                <div className="lg:py-6 py-4 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-4">
                    {petdetails.map((detail, index) => (
                        <div key={index} className="px-4 py-6 rounded-lg bg-white shadow md flex flex-col items-right gap-4">
                            <div className="bg-gray-950 rounded-md p-2 w-8 h-8 flex items-center justify-center">
                                <h2 className="text-white text-sm">{detail.number}</h2>
                            </div>
                            <p className="leading-relaxed text-md lg:text-lg text-gray-950 font-medium">
                                {detail.statement}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="lg:py-8 md:py-6 py-4 mt-4 flex items-center justify-center">
                    <Link href="/booking" className="px-6 py-3 
                text-lg font-bold 
                bg-amber-400 text-gray-900 
                rounded-xl 
                hover:bg-amber-300 transition duration-300 
                shadow-xl 
                transform hover:scale-[1.03]">
                        Book Now
                    </Link>
                </div>
            </div>
        </section>
    )
}