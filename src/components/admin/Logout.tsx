import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { AppDispatch } from "@/redux/store";
import { LOGIN_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authActions";
import Button from "../Button";

const Logout = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  async function logout() {
    await dispatch(logoutUser());

    router.replace(LOGIN_ROUTE);
  }

  return (
    <Button size="md" className="w-full" onClick={logout}>
      <FaSignOutAlt />
      <span>Log Out</span>
    </Button>
  );
};

export default Logout;
