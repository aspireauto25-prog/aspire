"use client";

import { FaArrowDown } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

import OutlinedButton from "../OutlinedButton";

interface Props {
  defaultLimit: string;
}

const LoadMoreButton = ({ defaultLimit }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const limit = parseInt(searchParams.get("limit") ?? defaultLimit);

  return (
    <div className="mt-12 text-center">
      <OutlinedButton
        rounded
        className="mx-auto"
        onClick={() => router.push(`?limit=${limit + 6}`)}
      >
        Load More Cars
        <FaArrowDown />
      </OutlinedButton>
    </div>
  );
};

export default LoadMoreButton;
