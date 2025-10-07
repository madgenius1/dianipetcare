
import { servicesMetadata } from "../lib/metadata";

import PageHeader from "../components/ui/PageHeader"
import { servicesList } from "../lib/servicedata"
import ServiceCard from "../components/ui/ServiceCard"

export const metadata = servicesMetadata;

export default function Page() {
    return (
        <main>
            <PageHeader
                title="Our Pet Care Services"
                bgImage="/servicesdog.webp"
            />

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="sr-only">List of Services</h2> 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {servicesList.map((service) => (
                        <ServiceCard
                            key={service.serviceId}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}