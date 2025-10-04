import Link from "next/link";

export default function Value() {
    return (
        // 1. Set the background image and define padding
        <section
            className="py-12 md:py-16 lg:py-18 bg-[url(/dogandcat.webp)] bg-center bg-cover bg-no-repeat relative overflow-hidden"
            aria-label="Monthly Pet Care Packages Banner"
        >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="flex justify-center md:justify-start">
                    <div className="flex flex-col gap-6 items-center text-center md:items-start md:text-left max-w-xl">
                        <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg">
                            For Healthier, Cleaner, and Happier Pets.
                        </h3>
                        <p className="text-white text-lg sm:text-xl font-medium drop-shadow-md">
                            Check out our comprehensive monthly pet care packages today.
                        </p>

                        <Link
                            href="/packages"
                            className="
                mt-4
                px-8 py-4 
                text-lg font-bold 
                bg-amber-400 text-gray-900 
                rounded-xl 
                hover:bg-amber-300 transition duration-300 
                shadow-xl 
                transform hover:scale-[1.03]
              "
                        >
                            Explore Care Packages
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}