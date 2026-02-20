import BuySellCTA from "@/components/buy-sell/CTA";
import BuySellTabs from "@/components/buy-sell/Tabs";
import BuySellWhyChooseUs from "@/components/buy-sell/WhyChooseUs";
import Hero from "@/components/Hero";

import heroBg from "@/assets/images/buy-sell-bg.jpg";

const BuySellLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Hero
        backgroundImage={heroBg}
        subtitle="Find your dream car or sell your vehicle with confidence through
              our trusted platform."
        title={
          <>
            Buy &amp; Sell <span className="gradient-text">Premium</span> Cars
          </>
        }
      />

      <BuySellTabs />

      {children}

      <BuySellCTA />
      <BuySellWhyChooseUs />
    </>
  );
};

export default BuySellLayout;
