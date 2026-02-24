import Hero from "@/components/Hero";

import heroBg from "@/assets/images/contact-hero-bg.jpg";

const ReviewsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Hero
        title={
          <>
            What Our <span className="gradient-text">Customers</span> Say
          </>
        }
        subtitle="Real stories from real customers who have experienced our premium car services."
        backgroundImage={heroBg}
      />
      {children}
    </div>
  );
};

export default ReviewsLayout;
