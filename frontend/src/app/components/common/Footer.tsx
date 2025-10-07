
import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const links = [
    { url: "mailto:book@dianipetcare.com", title: "book@dianipetcare.com" },
    { url: "tel:+254712345678", title: "+254 712 345 678" },
    { url: "tel:+254712345678", title: "+254 712 345 678" },
]
const socials = [
    { icon: <FaFacebook size={24} className="dark:text-gray-900 text-white" />, url: "https://www.facebook.com" },
    { icon: <FaWhatsapp size={24} className="dark:text-gray-900 text-white" />, url: "https://www.whatsapp.com" },
    { icon: <FaInstagram size={24} className="dark:text-gray-900 text-white" />, url: "https://www.instagram.com" },
    { icon: <FaTiktok size={24} className="dark:text-gray-900 text-white" />, url: "https://www.tiktok.com" },
    { icon: <RiTwitterXFill size={24} className="dark:text-gray-900 text-white" />, url: "https://www.x.com" }
]

const details = [
    {
        id: "Company",
        links: [
            { textOne: "Services", linkOne: "/services" },
            { textOne: "Booking", linkOne: "/booking" },
            { textOne: "About Us", linkOne: "/about" },
            { textOne: "Subscribe", linkOne: "/subscribe" },
        ]
    },
    {
        id: "Support",
        links: [
            { textOne: "How It Works", linkOne: "#working" },
            { textOne: "FAQs", linkOne: "/faqs" },
            { textOne: "Privacy Policy", linkOne: "/privacy" },
            { textOne: "Terms of Use", linkOne: "/terms" },
        ]
    }
];


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" bg-[#F6F2E9]">
            <div className="lg:px-6 md:px-6 px-4 lg:py-20 md:py-16 py-12 max-w-screen-xl mx-auto">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-4 p-4">
                    {/* Left Content */}
                    <div className="lg:w-1/3 w-full flex flex-col gap-4 py-4">
                        <div className="flex flex-col py-2 space-y-2">
                            <Link href="/">
                                <Image
                                    src="/footerlogo.jpg"
                                    alt="Diani Pet Care logo"
                                    width={200}
                                    height={80}
                                />
                            </Link>
                            <p className="text-gray-950 font-semibold text-md">
                                Your reliable pet care partner for dog walking, grooming, and boarding.
                            </p>
                            <div className="py-2 flex flex-col gap-2">
                            {links.map((link, index) =>
                            (
                                <Link key={index} href={link.url} className="text-sm lg:text-md hover:underline font-medium text-white dark:text-gray-900">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        </div>
                    
                        <div className="py-2 flex flex-row space-x-4 ">
                            {socials.map((social, index) =>
                            (
                                <Link key={index} href={social.url} className="rounded-full">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="lg:w-2/3 w-full lg:flex lg:justify-end lg:px-12 md:px-8 py-4">
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 md:grid-cols-2">
                            {details.map((section, index) => (
                                <div key={index} className="flex flex-col space-y-2">
                                    <h3 className="text-md font-semibold text-white dark:text-gray-950">
                                        {section.id}
                                    </h3>
                                    <ul className="space-y-4">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.linkOne} className="text-gray-400 hover:text-white hover:underline dark:text-gray-800 dark:hover:text-blue-700">
                                                    {link.textOne}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <hr className="border-gray-700 py-4" />
                <div className=" flex flex-col gap-y-2">
                    <p className=" text-sm text-center lg:text-md">
                        <strong className="text-white dark:text-gray-900">Diani Pet Care | Copyright </strong> © {currentYear} | All Rights Reserved
                    </p>
                    <p className="text-center">
                        A platform by{' '}
                        <Link href="https://nickjuma.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-950 transition-colors duration-200">
                            Juma
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}