
import Link from "next/link"

const contactInfo = [
    {
        title: "Call Us",
        description: "Please dial",
        detail: "+254 712 345 678",
        linkType: "tel",
        href: "tel:+254789872396",
        isLink: true,
    },
    {
        title: "Find Us",
        description: "Diani Beach, Diani",
        detail: "Ukunda",
        isLink: false,
    },
    {
        title: "Reach Us",
        description: "Email us at",
        detail: "book@dianipetcare.com",
        linkType: "mailto",
        href: "mailto:book@dianipetcare.com",
        isLink: true,
    },
];

export default function ContactUs() {
    return (
        <div className="py-12 md:py-16 bg-gray-50 lg:py-18 overflow-hidden">
            <div className="max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4">
                <h2 className="text-3xl text-center lg:text-5xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Contact Us
                </h2>
                <div className="py-8">
                    <div className="py-8 grid grid-cols-1 gap-4  pt-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-8 px-2">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="h-32 text-[#121212]">
                                <div className="py-4 space-y-2 text-start">
                                    <span className="text-xl text-[#000EEE] font-semibold">{item.title}</span>
                                    <p className="font-medium">{item.description}</p>
                                    {item.isLink ? (
                                        <Link href={item.href || "#"} className="font-medium py-2">
                                            {item.detail}
                                        </Link>
                                    ) : (
                                        <span className="font-medium py-2">{item.detail}</span>
                                    )}
                                </div>
                                <hr className="text-gray-900" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}