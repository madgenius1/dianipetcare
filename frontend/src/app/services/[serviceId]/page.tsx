
import { services } from "@/app/lib/services";
import { notFound } from "next/navigation";
import Link from "next/link";

interface ServicePageProps {
    params: {
        serviceId: string;
    };
}

export default function Page({ params }: ServicePageProps) {
    const service = services.find((s) => s.id === params.serviceId);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            {/* Header Section */}
            <div
                className="bg-center bg-cover bg-no-repeat relative overflow-hidden lg:py-20 md:py-16 py-12"
                style={{ backgroundImage: `url(${service?.image})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="flex items-center justify-center lg:py-8 py-6 max-w-screen-xl mx-auto">
                    <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold text-white relative z-10">
                        {service?.title}
                    </h1>
                </div>
            </div>

            {/* Body Section */}
            <div className="lg:px-8 lg:py-12 md:py-8 md:px-6 py-6 px-4 max-w-screen-xl mx-auto">
                <div className="py-4 flex items-center justify-center">
                    <p className="text-md lg:text-lg text-center text-gray-950 leading-relaxed max-w-2xl">
                        {service?.description}
                    </p>
                </div>

                {/* Service Details */}
                <div className="mt-10 space-y-8 text-gray-800">
                    <section>
                        <h2 className="text-2xl font-bold mb-3">Ideal For</h2>
                        <p className="text-gray-700">{service?.idealFor}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">Price Range</h2>
                        <p className="text-gray-700">{service?.priceRange}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">Benefits</h2>
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                            {service?.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-3">Safety</h2>
                        <p className="text-gray-700">{service?.safety}</p>
                    </section>
                </div>

                {/* Call to Action */}
                <div className="py-10 flex items-center justify-center">
                    <Link
                        href="/booking"
                        className="mt-4 px-10 py-6 text-lg font-bold bg-amber-400 text-gray-900 rounded-xl hover:bg-amber-300 transition duration-300 shadow-xl transform hover:scale-[1.03]"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </main>
    );
}
