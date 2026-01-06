"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { DASHBOARD_ROUTE, HOME_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN, ROLE_STAFF } from "@/constants/userRoles";
import { RootState } from "@/redux/rootReducer";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!user) return;

    if ([ROLE_ADMIN, ROLE_STAFF].includes(user.role))
      return router.replace(DASHBOARD_ROUTE);

    router.replace(HOME_ROUTE);
  }, [user, router]);

  return <div>{children}</div>;
};

export default AuthLayout;
