import React from 'react';
import Link from 'next/link';

interface Service {
    serviceId: string;
    serviceName: string;
    bgImage: string;
}

interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { serviceId, serviceName, bgImage } = service;

    return (
        <Link
            href={`/services/${serviceId}`}
            className="group block relative rounded-xl overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl"
            aria-label={`Learn more about ${serviceName}`}
        >
            <div
                className="bg-cover bg-center min-h-[250px] aspect-video sm:aspect-[4/3] w-full"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                    <h3 className="text-2xl font-bold leading-snug">
                        {serviceName}
                    </h3>
                    <p className="mt-2 text-sm text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View Details &rarr;
                    </p>
                </div>
            </div>
        </Link>
    );
}
