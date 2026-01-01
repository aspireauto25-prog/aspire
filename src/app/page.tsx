import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Servicing from "@/components/home/Servicing";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <CTA />
      <Partners />
      <Servicing />
    </>
  );
}
