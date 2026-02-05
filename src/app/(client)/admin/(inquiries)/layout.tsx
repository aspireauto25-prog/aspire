import InquiryStats from "@/components/admin/inquiries/Stats";

const InquiresLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <InquiryStats />
      {children}
    </section>
  );
};

export default InquiresLayout;
