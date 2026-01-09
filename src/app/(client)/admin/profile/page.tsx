"use client";

import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";

import { RootState } from "@/redux/rootReducer";
import ChangePasswordForm from "@/components/admin/profile/ChangePasswordForm";
import ProfileForm from "@/components/admin/profile/Form";
import ProfileInfo from "@/components/admin/profile/Info";

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return;

  return (
    <section className="space-y-8 max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="relative">
            <div className="h-28 w-28 border-5 border-white shadow-md profile-avatar rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center">
              <span className="text-white font-bold text-4xl">AU</span>
            </div>
            <label
              htmlFor="avatarUpload"
              className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors duration-200"
            >
              <FaCamera className="text-white" />
              <input
                type="file"
                id="avatarUpload"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
          <ProfileInfo user={user} />
        </div>
      </div>
      {/* Personal Information Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Personal Information
          </h3>
        </div>
        <ProfileForm user={user || undefined} />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Update Password
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Change your account password
            </p>
          </div>
          <div className="flex items-center text-green-500">
            <i className="fas fa-shield-alt mr-2" />
            <span className="text-sm font-medium">Account Secure</span>
          </div>
        </div>
        <ChangePasswordForm id={user.id} />
      </div>
    </section>
  );
};

export default ProfilePage;
