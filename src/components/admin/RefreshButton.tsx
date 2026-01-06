"use client";

import { RiRefreshLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import OutlinedButton from "../OutlinedButton";

const RefreshButton = () => {
  const router = useRouter();

  return (
    <OutlinedButton onClick={() => router.refresh()} size="sm">
      <RiRefreshLine />
      Refresh
    </OutlinedButton>
  );
};

export default RefreshButton;
