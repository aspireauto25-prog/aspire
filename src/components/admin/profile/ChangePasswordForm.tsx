import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { changePassword } from "@/api/axios/auth";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface Props {
  id: number | string;
}

const ChangePasswordForm = ({ id }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordFormData>();

  // eslint-disable-next-line react-hooks/incompatible-library
  const newPassword = watch("newPassword");

  const { error, loading, run, success } = useRequest((data) =>
    changePassword({ id, ...(data as Record<string, unknown>) })
  );

  useEffect(() => {
    if (success) {
      toast.success("Password update successful.");
    }

    if (error) {
      toast.error("Password update failed. Please try again.", {
        autoClose: false,
      });
    }
  }, [success, error]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(run)}>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Current Password
          </label>
          <PasswordInput required {...register("currentPassword")} />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            New Password
          </label>
          <PasswordInput required {...register("newPassword")} />
          {/* Password Strength Indicator */}
          <div className="mt-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Password strength
              </span>
              <span id="passwordStrengthText" className="text-xs font-medium">
                Weak
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
                Must contain at least 8 characters, including uppercase,
                lowercase, numbers, and special characters.
              </p>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Confirm New Password
          </label>
          <PasswordInput
            required
            {...register("confirmPassword", {
              validate: (value) =>
                value === newPassword || "Passwords do not match.",
            })}
          />
          {errors.confirmPassword && (
            <div className="mt-2">
              <p className="text-sm text-red-500">
                <i className="fas fa-times-circle mr-1" />
                {errors.confirmPassword.message}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="pt-6 border-t border-gray-300 dark:border-gray-700 flex justify-end space-x-4">
        <Button type="submit" size="md" disabled={loading}>
          {loading && <Spinner />}
          Update Password
        </Button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
