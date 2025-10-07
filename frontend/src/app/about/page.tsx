

import PageHeader from "../components/ui/PageHeader"
import Header from "../components/about/Header"
import WhatWeDo from "../components/about/WhatWeDo"
import WhyChooseUs from "../components/about/WhyChooseUs"
import Faqs from "../components/about/Faqs"
import ContactUs from "../components/about/ContactUs"

export default function Page() {
    return (
        <main>
            <PageHeader
                title="About Us"
                bgImage="/aboutusdog.webp"
            />
            {/* About Us Header Section */}
            <Header />
            {/* What we do Section */}
            <WhatWeDo />
            {/* Why Choose Us Section */}
            <WhyChooseUs />
            {/* Frequently Asked Questions */}
            <Faqs />
            {/* Contact Us */}
            <ContactUs />
        </main>
    )
}