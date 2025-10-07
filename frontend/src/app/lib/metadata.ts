import { Metadata } from "next";

const siteName = "Diani Pet Care";
const baseUrl = "https://dianipetcare.com";

export const defaultMetadata: Metadata = {
  title: `${siteName} | Premium Pet Grooming, Walking & Boarding in Diani`,
  description:
    "Diani Pet Care offers trusted, affordable, and loving pet grooming, walking, and boarding services for dogs and cats in Diani and coastal Kenya.",
  keywords: [
    "pet care Diani",
    "Diani pet care ",
    "Pet care in Ukunda",
    "Pet care services Kenya",
    "Pet care in Diani",
    "Dog walking in Diani",
    "Dog walking in Ukunda",
    "dog grooming Kenya",
    "cat grooming",
    "pet boarding",
    "pet walking services",
    "Mombasa pet spa",
    "Diani pets",
    "pet services Kenya",
    "pet services diani",
    "pet services ukunda",
  ],
  openGraph: {
    title: `${siteName}`,
    description:
      "Trusted pet care services in Diani. Grooming, walking, and boarding your pets with love.",
    url: baseUrl,
    siteName: siteName,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Diani Pet Care - Professional Pet Services",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Trusted pet care services in Diani, Kenya — Grooming, walking, and boarding your pets with love.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  metadataBase: new URL(baseUrl),
};

// 🏠 Landing Page
export const homeMetadata: Metadata = {
  title: `${siteName} | Pet Sitting, Dog Walking, Pet Grooming.`,
  description:
    "Your pet deserves the best. Explore Diani Pet Care’s expert grooming, walking, and boarding services tailored to your furry friends.",
  keywords: [
    "pet grooming Diani",
    "dog walking",
    "pet boarding Kenya",
    "pet spa Diani",
    "veterinary services Kenya",
    "veterinary services Diani",
    "veterinary services Ukunda",
    "Pet care services Kenya",
    "Pet care services Diani",
    "Pet care services Ukunda",
    "Pet care in Diani",
    "Dog walking in Diani",
    "Dog walking in Ukunda",
    "dog grooming Kenya",
    "cat grooming",
    "pet boarding",
    "pet walking services",
    "Mombasa pet spa",
    "Diani pets spa",
    "pet services Kenya",
    "pet services diani",
    "pet services ukunda",
  ],
};

// 💇 Services Page
export const servicesMetadata: Metadata = {
  title: `Our Pet Care Services | ${siteName}`,
  description:
    "Explore our full range of pet care services — grooming, walks, daycare, and boarding. Perfect care for every pet, every day.",
  keywords: [
    "pet grooming",
    "pet daycare",
    "pet boarding",
    "dog wash",
    "dog walking",
    "Pet sitting",
    "cat grooming Kenya",
    "pet spa Diani",
  ],
};

// 📅 Booking Page
export const bookingMetadata: Metadata = {
  title: `Book a Session | ${siteName}`,
  description:
    "Book your pet’s grooming, walk, or care session online. Easy scheduling, instant confirmation, and trusted local experts.",
  keywords: [
    "book pet grooming",
    "pet booking Diani",
    "pet appointment Kenya",
    "dog wash booking",
    "cat grooming appointment",
  ],
};

// 💳 Checkout Page
export const checkoutMetadata: Metadata = {
  title: `Review Your Booking | ${siteName}`,
  description:
    "Review your pet’s booking details and confirm your order. Diani Pet Care — safe, simple, and transparent pet service booking.",
  keywords: [
    "pet booking review",
    "pet grooming checkout",
    "pet services Kenya",
  ],
};

// 💰 Payment Page
export const paymentMetadata: Metadata = {
  title: `Secure Payment | ${siteName}`,
  description:
    "Complete your payment securely with Mpesa or card. Diani Pet Care ensures seamless checkout for every pet service.",
  keywords: [
    "mpesa pet payment",
    "pay pet service",
    "secure checkout",
    "kenya pet payment",
  ],
};

// 🐾 About Page
export const aboutMetadata: Metadata = {
  title: `About Us | ${siteName}`,
  description:
    "Learn about Diani Pet Care’s mission — providing professional, compassionate, and affordable pet services in Diani and beyond.",
  keywords: ["about Diani Pet Care", "pet care team", "pet experts Kenya"],
};

// 📞 Contact Page
export const contactMetadata: Metadata = {
  title: `Contact Us | ${siteName}`,
  description:
    "Reach Diani Pet Care via WhatsApp, call, or email. We’re here to help with your pet grooming and care needs.",
  keywords: [
    "contact pet care",
    "Diani pet contact",
    "call pet groomer",
    "whatsapp pet care",
  ],
};

// 🏆 Packages Page
export const packagesMetadata: Metadata = {
  title: `Care Packages | ${siteName}`,
  description:
    "Choose from our flexible pet care plans — Bronze, Gold, and Platinum tiers designed for every pet and budget.",
  keywords: [
    "pet care pricing",
    "Pet care packages",
    "pet grooming packages",
    "bronze gold platinum pet plans",
    "affordable pet care Diani",
  ],
};

// 🐶 Dynamic Service Page (for /services/[serviceId])
export const getServiceMetadata = (serviceName: string): Metadata => ({
  title: `${serviceName} | | ${siteName}`,
  description: `Learn more about our ${serviceName} service — quality care for your pets in Diani.`,
  keywords: [
    `${serviceName} Diani`,
    "pet grooming",
    "dog services Kenya",
    "pet boarding Diani",
    "pet spa Kenya",
  ],
});
