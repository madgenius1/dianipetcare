import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex items-center justify-center min-h-screen bg-[url(/bg.webp)] bg-cover bg-center bg-no-repeat ">
            <div className="absolute inset-0 bg-gray-100 opacity-20"></div>

            <div className="relative z-10 max-w-screen-xl container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="lg:w-3/5 lg:pr-8 max-w-2xl flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="mb-4 lg:mb-6">
                            <h2 className="text-lg sm:text-xl text-gray-900 uppercase font-semibold tracking-wider">
                                Diani Pet Care
                            </h2>
                        </div>

                        <div className="max-w-3xl mb-4 lg:mb-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-950 font-bold leading-tight">
                                Trusted Dog Walking & Pet Care in Diani, Ukunda.
                            </h1>
                            <p className="mt-4 text-lg sm:text-xl text-gray-800 font-medium">
                                Safe, reliable walks, sitting, and grooming. Book online in minutes.
                            </p>
                        </div>

                        <div className="py-4 flex lg:flex-row md:flex-row flex-col gap-4">
                            <Link
                                href="/booking"
                                className="z-5 inline-block px-8 py-4 
                                text-lg font-bold 
                                bg-amber-400 text-gray-900 
                                rounded-xl 
                                hover:bg-amber-300 transition duration-300 
                                shadow-xl 
                                transform hover:scale-[1.03]"
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/packages"
                                className="z-5 inline-block px-8 py-4 
                                text-lg font-bold 
                                bg-amber-400 text-gray-900 
                                rounded-xl 
                                hover:bg-amber-300 transition duration-300 
                                shadow-xl 
                                transform hover:scale-[1.03]"
                            >
                                Packages
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-2/5">
                        <div className="relative w-full h-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/happydog.webp"
                                alt="Diani Pet Care Happy Dog"
                                layout="fill" // Use fill for full responsiveness
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}