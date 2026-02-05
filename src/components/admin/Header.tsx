import Theme from "../Theme";

interface Props {
  username?: string;
  title?: string;
  subtitle?: string;
}

const AdminHeader = ({
  username,
  title = "Aspire Automotive",
  subtitle = "Car Rental, Service & Sales",
}: Props) => {
  return (
    <header className="sticky w-full top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex flex-row md:items-center justify-between">
          <div>
            <h2 className="hidden md:block text-xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h2>
            <p className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            {/* <div className="relative">
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
                <FaBell className=" text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div> */}

            <Theme />

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center gap-2 rounded-lg dark:hover:bg-dark-700">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary to-red-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AU</span>
                </div>
                <span className="hidden md:inline font-medium text-gray-700 dark:text-gray-300">
                  {username}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
