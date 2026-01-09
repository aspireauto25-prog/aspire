import checkPasswordStrength from "@/utils/passwordChecker";

interface Props {
  password: string;
}

const PasswordChecker = ({ password }: Props) => {
  const { score, strength } = checkPasswordStrength(password);

  return (
    <div className="mt-2">
      <div className="flex justify-between mb-1">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {strength}
        </span>
        <span id="passwordStrengthText" className="text-xs font-medium">
          {score}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
        <div
          id="passwordStrengthBar"
          className="password-strength strength-weak"
        />
      </div>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        <p>
          Must contain at least 8 characters, including uppercase, lowercase,
          numbers, and special characters.
        </p>
      </div>
    </div>
  );
};

export default PasswordChecker;
