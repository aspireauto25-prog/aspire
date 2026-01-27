import CarStats from "@/components/admin/cars/Stats";

const CarsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <CarStats />
      {children}
    </section>
  );
};

export default CarsLayout;
