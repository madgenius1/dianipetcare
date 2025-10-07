
"use client"

import { useState } from 'react';
import Link from "next/link";

interface AccordionItem {
    title: string;
    description: string;
}

const accordionItems: AccordionItem[] = [
    {
        title: "How do I book a service?",
        description: "You can book directly through our website by selecting your preferred service, time, and date. Once confirmed, you will receive a notification and your assigned pet care professional’s details.",
    },
    {
        title: "Do you offer home visits or only in-facility services?",
        description: "We currently offer home visits for some services as we expand our facilities. You can request home visits for grooming, walking, or care as per your selected care package.",
    },
    {
        title: "What payment methods do you accept?",
        description: "We currently accept M-Pesa, Visa, and MasterCard payments. All transactions are secure, and you will receive a digital receipt after every payment.",
    },
    {
        title: "Do you handle multiple pets from the same household?",
        description: "Yes! Our pricing tiers are built to accommodate up to 9 pets per household. Multi-pet families can enjoy discounted rates under our Gold and Platinum packages.",
    },
    {
        title: "What happens if my pet has special needs or medical conditions?",
        description: "During booking, you can specify any special requirements or health concerns. Our team will review them and assign a suitable, experienced caretaker for your pet’s condition.",
    },
]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#f6f2e9] py-12 md:py-16 lg:py-18 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center lg:text-5xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Frequently Asked Questions
                </h2>
                <div className="lg:px-8 md:px-6 py-8">
                    <div className="flex flex-col items-center gap-4 py-2">
                        {accordionItems.map((item: AccordionItem, index: number) => (
                            <div key={index} className={`flex flex-col gap-2 w-full
                                ${index === 0 ? 'border-t' : ''}
                                border rounded-lg border-gray-300 dark:border-gray-700
                                p-4 cursor-pointer`}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-md lg:text-xl md:text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h2>
                                    <svg
                                        className={`w-5 h-5 text-gray-950 transform transition-transform duration-300
                                        ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out p-2
                                    ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-sm w-full lg:text-md text-gray-800 mb-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center py-8">
                        <Link
                            href="/faqs"
                            className="mt-4 px-10 py-6 text-lg font-bold bg-amber-400 text-gray-900 rounded-xl hover:bg-amber-300 transition duration-300 shadow-xl transform hover:scale-[1.03]"
                        >
                            More FAQs

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}