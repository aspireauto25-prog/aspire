"use client";

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { deleteSaleCar } from "@/api/axios/saleCars";

interface Props {
  id: number;
}

const DeleteAction = ({ id }: Props) => {
  const router = useRouter();

  function onDelete() {
    if (confirm("Are you sure?")) {
      deleteSaleCar(id);

      router.refresh();
    }
  }

  return (
    <button
      className="px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 flex items-center gap-2 cursor-pointer"
      title="Delete"
      onClick={onDelete}
    >
      <FaTrash />
      <span className="text-sm">Delete</span>
    </button>
  );
};

export default DeleteAction;
