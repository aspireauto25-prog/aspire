import { features } from "@/data/rent";
import Hero from "@/components/Hero";
import RentalCarsSearch from "@/components/rent/Search";
import RentCTA from "@/components/rent/CTA";
import RentFeature from "@/components/rent/Feature";

import heroBg from "@/assets/images/rent-hero-bg.jpg";

const RentListLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Explore Our <span className="gradient-text">Premium Fleet</span>
          </>
        }
        subtitle="Choose from our extensive collection of luxury, economy, and electric vehicles"
        backgroundImage={heroBg}
        action={<RentalCarsSearch />}
      />

      {/* Main Content */}
      {children}

      <RentCTA />

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AutoElite?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We make car rental simple, reliable, and premium
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <RentFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RentListLayout;
