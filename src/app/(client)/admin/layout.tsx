"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { LOGIN_ROUTE } from "@/constants/routes";
import { RootState } from "@/redux/rootReducer";
import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) router.replace(LOGIN_ROUTE);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <AdminHeader username={user?.name} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
