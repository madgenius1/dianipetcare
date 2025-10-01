import CTA from "./components/landing/CTA";
import Hero from "./components/landing/Hero";
import HowItWorks from "./components/landing/HowItWorks";
import Pricing from "./components/landing/Pricing";
import ServicesSnapShot from "./components/landing/ServicesSnapShot";
import Value from "./components/landing/Value";



export default function Page() {
  return (
    <main>
      <Hero />
      <ServicesSnapShot />
      <Value />
      <HowItWorks />
      <Pricing />
      <CTA />
    </main>
  );
}
