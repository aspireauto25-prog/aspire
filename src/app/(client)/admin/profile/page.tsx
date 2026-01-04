import {
  FaCalendarAlt,
  FaCamera,
  FaEnvelope,
  FaEye,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

import Button from "@/components/Button";

const ProfilePage = () => {
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
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Admin User
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Administrator
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-400 dark:text-gray-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  admin@carrental.com
                </span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-400 dark:text-gray-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <FaMapMarkedAlt className="text-gray-400 dark:text-gray-500 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  New York, USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Information Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Personal Information
          </h3>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Admin"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="User"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="admin@carrental.com"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                defaultValue="1234 Business Center Dr, New York, NY 10001"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary"
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
            <Button size="md" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
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
        <form id="passwordForm" className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="currentPassword"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FaEye />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="newPassword"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FaEye />
                </button>
              </div>
              {/* Password Strength Indicator */}
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Password strength
                  </span>
                  <span
                    id="passwordStrengthText"
                    className="text-xs font-medium"
                  >
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
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <FaEye />
                </button>
              </div>
              <div id="passwordMatch" className="mt-2 hidden">
                <p className="text-sm text-red-500">
                  <i className="fas fa-times-circle mr-1" />
                  Passwords do not match
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-300 dark:border-gray-700 flex justify-end space-x-4">
            <Button type="submit" size="md">
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfilePage;
