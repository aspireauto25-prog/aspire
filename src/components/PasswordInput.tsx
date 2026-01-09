import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const PasswordInput = (props: Record<string, unknown>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary pr-10"
        placeholder="••••••••"
        {...props}
      />
      <button
        type="button"
        className="absolute right-0 top-0.5 p-3 text-gray-600 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </div>
  );
};

export default PasswordInput;
