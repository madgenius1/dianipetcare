export default function Pricing() {
    const tiers = [
    {
        id: "bronze",
        name: "Bronze Care",
        price: "Ksh 2,800",
        pets: "Up to 3 pets/household",
        walks: "2 walks/week",
        washes: "1 wash/week",
        grooming: "0 grooming/month",
        includes: [
            "Basic cleanup",
        ],
    },
    {
        id: "gold",
        name: "Gold Care",
        price: "Ksh 5,500",
        pets: "Up to 5 pets/household",
        walks: "3 walks/week",
        washes: "2 washes/week",
        grooming: "1 grooming/month",
        includes: [
            "Litter cleanup",
            "Minor vet coordination",
        ],
        popular: true,
    },
    {
        id: "platinum",
        name: "Platinum Care",
        price: "Ksh 10,500",
        pets: "Up to 9 pets/household",
        walks: "5 walks/week",
        washes: "3 washes/week",
        grooming: "2 grooming/month",
        includes: [
            "Deep cleaning and litter cleanup",
            "Full grooming & emergency support",
            "Pick-up & drop-off service",
            "Weekly health reports",
        ],
    },
];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 md:mb-12 text-center tracking-tight">
                    Pet Care Packages
                </h2>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-8 md:py-6">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative flex flex-col items-center border rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-xl ${tier.popular ? "border-amber-500 scale-105 bg-amber-50" : "border-gray-200 bg-white"
                                }`}
                        >
                            {tier.popular && (
                                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                            <p className="text-lg font-semibold text-amber-600 mb-4">{tier.price}/month</p>

                            <ul className="text-gray-700 text-sm space-y-2 mb-6">
                                <li>🐾 {tier.pets}</li>
                                <li>🚶‍♂️ {tier.walks}</li>
                                <li>🧼 {tier.washes}</li>
                                <li>✂️ {tier.grooming}</li>
                            </ul>

                            <div className="w-full border-t border-gray-200 mb-6" />

                            <ul className="text-gray-600 text-sm space-y-2 mb-8">
                                {tier.includes.map((item, index) => (
                                    <li key={index}>- {item}</li>
                                ))}
                            </ul>
                            {/* Add link to head to checkout page. */}
                            <button
                                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition cursor-pointer ${tier.popular
                                    ? "bg-amber-500 text-white hover:bg-amber-600"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                Choose {tier.name.split(" ")[0]}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
