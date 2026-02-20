"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { LOGIN_ROUTE } from "@/constants/routes";
import { RootState } from "@/redux/rootReducer";
import AdminHeader from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import Spinner from "@/components/Spinner";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user) {
      router.replace(LOGIN_ROUTE);
    }
  }, [user, router]);

  if (!user)
    return (
      <section className="py-24 flex items-center justify-center w-full">
        <Spinner className="h-16 w-16 fill-primary" />
      </section>
    );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto text-gray-800 dark:text-gray-200">
        <AdminHeader username={user?.name} />
        <main className="py-6 px-3 md:px-6  h-full bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
