import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <AdminHeader />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
