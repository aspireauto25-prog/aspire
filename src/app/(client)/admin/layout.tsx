"use client";

import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AdminHeader />
      <section className="flex h-screen pt-20">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          {children}
        </main>
      </section>
    </>
  );
};

export default AdminLayout;
