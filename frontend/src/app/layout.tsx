import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import './globals.css'
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diani Pet Care | Dog walking, pet grooming, and care in Diani",
  description: "Trusted Dog Walking, Grooming, Boarding, and Professional Pet Care Services in Diani, Ukunda, South Coast. ",
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
