"use client";

import { IconType } from "react-icons";
import { MdClose } from "react-icons/md";
import { ReactNode } from "react";

import Button from "./Button";

interface Props {
  action?: ReactNode;
  children?: ReactNode;
  Icon?: IconType;
  setShow: (_: boolean) => void;
  show: boolean;
  title: string;
}

const Modal = ({ action, children, Icon, title, setShow, show }: Props) => {
  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50`}
    >
      <div
        className="fixed top-0 left-0 h-screen w-full bg-black/20 dark:bg-black/40"
        onClick={() => setShow(false)}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-max relative bg-white dark:bg-gray-700 rounded-lg shadow-sm mx-4 lg:max-w-1/2">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center cursor-pointer"
            onClick={() => setShow(false)}
          >
            <MdClose className="w-6 h-6" />
          </button>
          <div className="p-6 md:p-12 text-center">
            <div className="flex justify-center text-primary text-5xl">
              {Icon && <Icon />}
            </div>
            <h3 className="my-5 text-xl font-normal whitespace-break-spaces">
              {title}
            </h3>
            {children}
            {action && (
              <div className="flex items-center justify-center gap-4 mt-5">
                {action}
                <Button onClick={() => setShow(false)} size="sm" theme="light">
                  No, cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
