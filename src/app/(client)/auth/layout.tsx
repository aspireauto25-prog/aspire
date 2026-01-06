"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import { DASHBOARD_ROUTE, HOME_ROUTE } from "@/constants/routes";
import { USER_ROLE_ADMIN, USER_ROLE_STAFF } from "@/constants/user";
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

    if ([USER_ROLE_ADMIN, USER_ROLE_STAFF].includes(user.role))
      return router.replace(DASHBOARD_ROUTE);

    router.replace(HOME_ROUTE);
  }, [user, router]);

  return <div>{children}</div>;
};

export default AuthLayout;
