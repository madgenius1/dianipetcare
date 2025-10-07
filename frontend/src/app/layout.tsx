import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import './globals.css'
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const siteName = "Diani Pet Care";
const baseUrl = "https://dianipetcare.com";

export const metadata: Metadata = {
  title: "Diani Pet Care | Dog walking, Pet Grooming, and Pet Care in Diani",
  description: "Trusted Dog Walking, Grooming, Boarding, and Professional Pet Care Services in Diani, Ukunda, South Coast. ",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={comfortaa.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
