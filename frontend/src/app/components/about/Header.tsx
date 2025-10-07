
import Image from "next/image"

export default function Header() {
    return (
        <div className="py-12 md:py-16 lg:py-18 bg-gray-50 overflow-hidden">
            <div className="flex flex-col md:flex-row lg:flex-row gap-8 justify-between max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4">
                <div className="flex flex-col items-start justify-start py-4 space-y-4 h-auto max-w-2xl">
                    <h2 className="text-xl lg:text-5xl md:text-2xl font-bold text-gray-950">
                        About Diani Pet Care
                    </h2>
                    <p className="text-md text-gray-900 lg:text-lg font-medium">
                        We love pets. We provide comprehensive pet care for cats and dogs. <br />
                        We have over 4 years of experience in pet care and are committed to offering high-quality services to your precious family members.
                    </p>
                    <p className="text-md text-gray-900 lg:text-lg font-medium">
                        Our crew brings experience and a true love of animals to each encounter, ensuring that your pets are secure, happy, and looked after.
                    </p>
                </div>
                <div className="h-auto">
                    <Image
                        src="/dogandcat.webp"
                        alt="About Diani Pet Care"
                        width={420}
                        height={360}
                        className="object-contain object-center rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}