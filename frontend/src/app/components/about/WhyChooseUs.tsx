import Link from "next/link";
import { FaHeart, FaDollarSign, FaCalendarCheck, FaShieldHalved } from "react-icons/fa6";

const choices = [
    {
        title: "Professional and Compassionate Care",
        description: "Our team is made up of qualifie pet handlers, groomers, and walkers who genuinely love animals. Every visit is handled with care, patience, and expertise.",
        icon: FaHeart,
    },
    {
        title: "Transparent Pricing and Flexible Packages",
        description: "From Bronze to Platinum, our pricing tiers are clear, affordable, and tailored to your pet’s needs. No hidden fees. You pay only for what you use, with flexible upgrades anytime.",
        icon: FaDollarSign,
    },
    {
        title: "Convenient Online Booking",
        description: "Easily book and manage services online. Receive confirmations and updates on your pet’s care session.",
        icon: FaCalendarCheck,
    },
    {
        title: "Safe and Reliable Services",
        description: "We prioritize your pet’s safety with qualified staff and high-standard hygiene protocols. You can trust that your furry friend is always in good hands.",
        icon: FaShieldHalved,
    },
];

export default function WhyChooseUs() {
    return (
        <div className="py-12 md:py-16 bg-gray-50 lg:py-18 overflow-hidden">
            <div className="max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4">
                <h2 className="text-3xl text-center lg:text-5xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    Why Choose Us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 md:gap-6 lg:gap-8 gap-6 py-8">
                    {choices.map((choice, index) => {
                        const IconComponent = choice.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col space-y-3 p-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.02] bg-white border border-gray-100 h-full"
                            >
                                <div className="flex items-center space-x-4">
                                    <IconComponent className="w-8 h-8 text-blue-600 flex-shrink-0" />

                                    <h3 className="text-xl lg:text-2xl text-gray-900 font-bold">
                                        {choice.title}
                                    </h3>
                                </div>
                                <p className="text-md text-gray-700 mt-2">
                                    {choice.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}