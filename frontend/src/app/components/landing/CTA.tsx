import Image from "next/image"
import Link from "next/link"
import { IoMailOutline, IoLocationOutline, IoPhonePortraitOutline } from "react-icons/io5";


// type ContactLink = {
//     url: string;
//     title: string;
//     icon: React.ElementType;
//     label: string;
// }

const contactLinks = [
    {
        url: "mailto:book@dianipetcare.com",
        title: "book@dianipetcare.com",
        icon: <IoMailOutline size={20} className="text-blue-600" />,
        label: "Email Diani Pet Care"
    },
    {
        url: "tel:+254712345678",
        title: "+254 712 345 678",
        icon: <IoPhonePortraitOutline size={20} className="text-blue-600" />,
        label: "Call Diani Pet Care"
    },
    {
        url: "https://shorturl.at/X6uS1",
        title: "Diani Beach, Ukunda",
        icon: <IoLocationOutline size={20} className="text-blue-600" />,
        label: "Diani Pet Care Location"
    },
];

export default function AboutUsContact() {
    return (
        <section className="py-16 md:py-24 bg-gray-50" aria-label="About Diani Pet Care and Contact Information">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center tracking-tight">
                    About Diani Pet Care
                </h2>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            <span className="font-semibold">Diani Pet Care</span> is a trusted and passionate pet care service provider in Diani Beach, Ukunda, Kenya. We offer a comprehensive range of services including
                            <span className="font-medium"> dog training</span>, <span className="font-medium"> daycare sitting</span>, 
                            <span className="font-medium"> boarding</span>, <span className="font-medium"> pet walking</span>, 
                            and other fun-filled activities for pets.
                        </p>
                        <p className="text-lg text-gray-800 leading-relaxed">
                            Starting informally and building on deep insight and experience, we now have over three years of collective experience in the industry. We are dedicated to our core mission of creating a safe, nurturing, and enriching environment for every pet under our care.
                        </p>

                        <div className="mt-8 p-6 bg-white shadow-lg rounded-xl border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">
                                Ready to Book? Reach Out!
                            </h3>
                            <ul className="space-y-4">
                                {contactLinks.map((link, index) => {
                                    return (
                                        <li key={index} className="flex items-center gap-2 ">
                                            {link.icon}
                                            <Link
                                                href={link.url}
                                                aria-label={link.label}
                                                className="text-gray-900 font-medium hover:text-blue-600 transition duration-150 ease-in-out underline-offset-4 hover:underline"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* 3. Image Block */}
                    <div className="relative w-full h-[400px] lg:h-full lg:min-h-[500px] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/contactdog.webp"
                            alt="A happy dog being groomed or cared for by Diani Pet Care staff"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}