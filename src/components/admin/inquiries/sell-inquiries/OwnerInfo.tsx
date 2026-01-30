import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

import LinkButton from "@/components/LinkButton";

interface Props {
  email: string;
  name: string;
  phone: string;
}

const OwnerInfo = ({ email, name, phone }: Props) => {
  return (
    <aside className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-gray-900 overflow-hidden">
      <div className="p-6 border-b border-gray-300 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Owner Information
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Contact details of the car owner
        </p>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mr-4">
            <FaUser />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white text-lg">
              {name}
            </h4>
            <p className="text-gray-600 dark:text-gray-400">Car Owner</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
              <FaEnvelope className="text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
              <a
                href={`mailto:${email}`}
                className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all"
              >
                {email}
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
              <FaPhone className="text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
              <a
                href={`tel:${phone}`}
                className="font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary transition-all"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-4">
            <LinkButton href={`tel:${phone}`} size="md">
              <FaPhone />
              Call Owner
            </LinkButton>
            <LinkButton href={`mailto:${email}`} size="md" theme="light">
              <FaEnvelope />
              Email
            </LinkButton>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OwnerInfo;
