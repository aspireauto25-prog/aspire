import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

import { User } from "@/lib/types/user.types";

interface Props {
  user: User;
}

const ProfileInfo = ({ user }: Props) => {
  return (
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        {user.name}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{user.role}</p>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="flex items-center">
          <FaEnvelope className="text-gray-400 dark:text-gray-500 mr-2" />
          <span className="text-gray-700 dark:text-gray-300">{user.email}</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-400 dark:text-gray-500 mr-2" />
          <span className="text-gray-700 dark:text-gray-300">{user.phone}</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkedAlt className="text-gray-400 dark:text-gray-500 mr-2" />
          <span className="text-gray-700 dark:text-gray-300">
            {user.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
