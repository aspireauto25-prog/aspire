import Hero from "@/components/Hero";

import heroBg from "@/assets/images/buy-sell-bg.jpg";

const AboutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Hero
        title={
          <>
            Driving <span className="gradient-text">Excellence</span>
          </>
        }
        subtitle="We're more than just a car rental company - we're your trusted
            partner for premium mobility solutions."
        backgroundImage={heroBg}
      />

      {children}
    </main>
  );
};

export default AboutLayout;
