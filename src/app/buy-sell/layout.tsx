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
        action={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-gray-300">Cars Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-gray-300">Quick Sale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-300">Verified</div>
            </div>
          </div>
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
