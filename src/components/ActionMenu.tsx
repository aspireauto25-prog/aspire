"use client";

import { FaEllipsisH } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function ActionMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
      >
        <FaEllipsisH />
      </button>

      {open && (
        <div
          ref={menuRef}
          className="absolute right-0 mt-1 w-36 rounded-lg border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 shadow-lg z-50 overflow-hidden"
        >
          <div className="flex flex-col">{children}</div>
        </div>
      )}
    </div>
  );
}
