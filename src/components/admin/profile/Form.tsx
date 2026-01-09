import { FaCalendarAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { AppDispatch } from "@/redux/store";
import { updateUser } from "@/redux/auth/authSlice";
import { updateUser as updateUserProfile } from "@/api/axios/user";
import { User } from "@/lib/types/user.types";
import Button from "@/components/Button";
import useRequest from "@/hooks/useRequest";
import Spinner from "@/components/Spinner";

interface Props {
  user?: User;
}

const ProfileForm = ({ user }: Props) => {
  const { register, handleSubmit } = useForm<User>({
    values: user,
  });

  const { data, error, loading, run, success } = useRequest((data) =>
    updateUserProfile(user?.id as number, data as User)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (success) {
      dispatch(updateUser(data?.data));

      toast.success("Profile update successful.");
    }

    if (error) {
      console.log(error);
      toast.error("Profile update failed. Please try again.", {
        autoClose: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(run)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
            required
            {...register("name")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
            required
            {...register("email")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
            required
            {...register("phone")}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
            {...register("address")}
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Role
          </label>
          <div className="flex items-center">
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mr-3">
              Administrator
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Full Access
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
            Joined Date
          </label>
          <div className="flex items-center">
            <FaCalendarAlt className=" text-gray-400 dark:text-gray-500 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">
              March 15, 2022
            </span>
          </div>
        </div>
      </div>
      <div className=" pt-6 border-t border-gray-300 dark:border-gray-700 flex justify-end space-x-4">
        <Button size="md" type="submit" disabled={loading}>
          {loading && <Spinner />}
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
