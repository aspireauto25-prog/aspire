import { FaBell, FaChevronDown, FaSearch } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-dark-800 shadow-sm border-b dark:border-dark-700">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Contact Form Inquiries
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage and respond to customer inquiries
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search inquiries..."
                className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-500" />
            </div>
            {/* Notifications */}
            <div className="relative">
              <button
                id="notificationsBtn"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 relative"
              >
                <FaBell className=" text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div>
            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700">
                <div className="w-8 h-8 rounded-full bg-linear-to-r from-primary to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AJ</span>
                </div>
                <span className="hidden md:inline font-medium text-gray-700 dark:text-gray-300">
                  Admin
                </span>
                <FaChevronDown className=" text-gray-500 dark:text-gray-400 hidden md:inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
