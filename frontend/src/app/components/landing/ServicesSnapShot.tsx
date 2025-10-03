import React from 'react';

interface Service {
    serviceId: string;
    serviceName: string;
    name: string;
    bgImage: string;
    classes: string;
}

const Link: React.FC<{ href: string; children: React.ReactNode; className: string }> = ({ href, children, className }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

const SERVICES: Service[] = [
    {
        serviceId: "petgrooming",
        serviceName: "Pet Grooming",
        name: "Pet Grooming",
        bgImage: "/petgrooming.webp",
        classes: "lg:col-span-4 lg:row-span-2 md:col-span-4 md:row-span-3"
    },
    {
        serviceId: "dogwalking",
        serviceName: "Dog Walking",
        name: " Outdoor Dog Walks",
        bgImage: "/petwalking.webp",
        classes: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2"
    },
    {
        serviceId: "petsitting",
        serviceName: "Pet Sitting",
        name: "In-Home Pet Sitting",
        bgImage: "/petsitting.webp",
        classes: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2"
    },
    {
        serviceId: "pettransport",
        serviceName: "Pet Transport",
        name: "Movement and Transport",
        bgImage: "/petgrooming.webp",
        classes: "lg:col-span-4 lg:row-span-2 md:col-span-4 md:row-span-2"
    },
    {
        serviceId: "petboarding",
        serviceName: "Pet Boarding",
        name: "Overnight Pet Boarding",
        bgImage: "/petboarding.webp",
        classes: "lg:col-span-3 lg:row-span-2 md:col-span-4 md:row-span-2"
    },
    {
        serviceId: "pettraining",
        serviceName: "Dog Training",
        name: "Certified Dog Training",
        bgImage: "/petboarding.webp",
        classes: "lg:col-span-3 lg:row-span-2 md:col-span-4 md:row-span-2"
    },
];

export default function ServicesSnapShopt() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50 font-sans">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center tracking-tight">
                    Our Premium Pet Services
                </h2>

                <div className="grid 
                            grid-cols-1 
                            md:grid-cols-4 
                            lg:grid-cols-6 
                            gap-4 lg:gap-6 
                            auto-rows-[minmax(14rem,1fr)] 
                            w-full
                        ">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.serviceId}
                            href={`/services/${service.serviceId}`}
                            className={`relative block w-full h-full overflow-hidden rounded-2xl 
                                shadow-md hover:shadow-2xl transition-all duration-700 ease-in-out
                                transform hover:scale-[1.02] group cursor-pointer
                                ${service.classes}
                            `}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat 
                                           transition-transform duration-700 ease-in-out 
                                           group-hover:scale-110"
                                style={{
                                    backgroundImage: `url(${service.bgImage})`,
                                    backgroundColor: '#1e293b'
                                }}
                                aria-label={service.name}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                                            group-hover:from-black/80 transition-all duration-500 rounded-2xl"></div>

                            {/* Content */}
                            <div className="relative p-6 md:p-8 flex flex-col justify-end h-full">
                                <p className="text-sm font-medium uppercase text-sky-300 mb-1 opacity-80">
                                    {service.serviceName}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg group-hover:translate-y-[-2px] transition-transform duration-500">
                                    {service.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
