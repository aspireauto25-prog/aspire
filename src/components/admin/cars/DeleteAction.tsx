"use client";

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { deleteCar } from "@/api/axios/cars";

interface Props {
  id: number;
}

const DeleteAction = ({ id }: Props) => {
  const router = useRouter();

  function onDelete() {
    if (confirm("Are you sure?")) {
      deleteCar(id);

      router.refresh();
    }
  }

  return (
    <button
      className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg cursor-pointer"
      title="Delete"
      onClick={onDelete}
    >
      <FaTrash />
    </button>
  );
};

export default DeleteAction;
