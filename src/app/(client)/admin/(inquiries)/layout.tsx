import InquiryStats from "@/components/admin/inquiries/Stats";

const InquiresLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="pb-10">
      <InquiryStats />
      {children}
    </section>
  );
};

export default InquiresLayout;
