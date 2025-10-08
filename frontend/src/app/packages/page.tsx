"use client"


// import { packagesMetadata } from '../lib/metadata';
// export const metadata = packagesMetadata;

import PageHeader from '../components/ui/PageHeader';

interface Feature {
    name: string;
    value: string;
}

interface PricingPackage {
    title: string;
    price: string;
    description: string;
    currency: string;
    color: string;
    isPopular?: boolean;
    features: Feature[];
}


const pricingData: PricingPackage[] = [
    {
        title: 'Bronze Care',
        price: '2,800',
        description:
            'The essential package for busy owners who need reliable weekly support and basic care.',
        currency: 'Ksh',
        color: 'border-amber-500',
        features: [
            { name: 'Pets/Household', value: 'Up to 3 pets' },
            { name: 'Walks/Week', value: 'Mon & Fri (45 min)' },
            { name: 'Wash/Week', value: '1 Premium Wash' },
            { name: 'Grooming/Month', value: 'None Included' },
        ],
    },
    {
        title: 'Gold Care',
        price: '5,500',
        description:
            'Our most popular choice, offering comprehensive care, extended walks, and regular grooming.',
        currency: 'Ksh',
        color: 'border-yellow-500',
        isPopular: true,
        features: [
            { name: 'Pets/Household', value: 'Up to 5 pets' },
            { name: 'Walks/Week', value: 'Mon, Wed, Fri (60 min)' },
            { name: 'Wash/Week', value: '2 Premium Washes' },
            { name: 'Grooming/Month', value: '1 Full Grooming Session' },
        ],
    },
    {
        title: 'Platinum Care',
        price: '10,500',
        description:
            'Full concierge service ensuring your pet receives luxury, daily attention, and unlimited support.',
        currency: 'Ksh',
        color: 'border-slate-500',
        features: [
            { name: 'Pets/Household', value: 'Up to 9 pets' },
            { name: 'Walks/Week', value: 'Daily (60 min)' },
            { name: 'Wash/Month', value: '3 Washes' },
            { name: 'Grooming/Month', value: '2 Full Grooming Sessions' },
        ],
    },
];


const FeatureItem: React.FC<Feature> = ({ name, value }) => (
    <div className="flex flex-col gap-1 p-3 border-b border-gray-100 last:border-b-0">
        <h3 className="text-sm sm:text-base text-gray-600 font-semibold flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-700 mr-2 flex-shrink-0" />
            {name}
        </h3>
        <span className="text-base sm:text-lg font-bold text-gray-900 ml-4">
            {value}
        </span>
    </div>
);

const PricingCard: React.FC<{ packageData: PricingPackage }> = ({ packageData }) => {
    const { title, price, description, currency, features, color, isPopular } = packageData;

    const popularBadgeClass = isPopular ? 'bg-yellow-400 text-yellow-900' : 'hidden';
    const buttonClass = isPopular
        ? 'bg-yellow-600 hover:bg-yellow-700 shadow-xl cursor-pointer'
        : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg cursor-pointer';

    const titleClass = isPopular ? 'text-yellow-700' : 'text-gray-900';

    return (
        <div
            className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] bg-white px-4 border-t-8 ${color} flex flex-col h-full`}
        >
            {isPopular && (
                <div
                    className={`absolute -top-4 right-6 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${popularBadgeClass}`}
                >
                    ⭐ Most Popular
                </div>
            )}

            <div className="flex flex-col p-6 sm:p-8">
                <h2 className={`text-3xl sm:text-4xl font-black mb-1 ${titleClass}`}>
                    {title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base py-2">{description}</p>
                <div className="text-xl sm:text-4xl font-extrabold text-gray-900">
                    {currency} {price}
                    <span className="text-lg font-medium text-gray-500">/month</span>
                </div>
            </div>

            <div className="flex flex-col flex-grow divide-y divide-gray-100 mt-auto px-4">
                {features.map((feature, index) => (
                    <FeatureItem key={index} name={feature.name} value={feature.value} />
                ))}
            </div>

            {/* Alter this to have links that lead to the checkout of each package */}
            <div className="p-6">
                <button
                    className={`w-full py-3 sm:py-4 rounded-xl text-white font-bold text-lg transition duration-300 ease-in-out ${buttonClass}`}
                    onClick={() => console.log(`Selected ${title} Package`)}
                >
                    Start with {title}
                </button>
            </div>
        </div>
    );
};

export default function Page() {
    return (
        <main>
            <PageHeader
                title="Pet Care Packages"
                bgImage="/carepackagesdog.webp"
            />

            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                        {pricingData.map((pkg, index) => (
                            <PricingCard key={index} packageData={pkg} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

