import CarStats from "@/components/admin/cars/Stats";

const CarsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="pb-10">
        <CarStats />
      {children}
    </section>
  );
};

export default CarsLayout;
