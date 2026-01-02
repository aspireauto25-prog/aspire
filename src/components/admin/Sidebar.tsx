import Logo from "../Logo";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg z-10 hidden md:block">
      <div className="p-6">
        <Logo />
        <p className="text-gray-500 text-sm mt-1">
          Car Rental, Service &amp; Sales
        </p>
      </div>
      <nav className="mt-6">
        <div className="px-4 mb-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </p>
        </div>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-tachometer-alt mr-3" />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          href="#"
          className="sidebar-active flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-car mr-3 text-primary" />
          <span className="font-medium">Cars for Rent</span>
          <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
            12
          </span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-tag mr-3" />
          <span className="font-medium">Cars for Sale</span>
          <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
            8
          </span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-wrench mr-3" />
          <span className="font-medium">Service Requests</span>
          <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
            3
          </span>
        </a>
        <div className="px-4 mb-4 mt-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Customer &amp; Contact
          </p>
        </div>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-inbox mr-3" />
          <span className="font-medium">Contact Form Results</span>
          <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
            24
          </span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-users mr-3" />
          <span className="font-medium">Customers</span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-calendar-alt mr-3" />
          <span className="font-medium">Bookings</span>
        </a>
        <div className="px-4 mb-4 mt-8">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Settings
          </p>
        </div>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-user-circle mr-3" />
          <span className="font-medium">Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <i className="fas fa-cog mr-3" />
          <span className="font-medium">Settings</span>
        </a>
      </nav>
      <div className="absolute bottom-0 p-6 w-max">
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">A</span>
            </div>
            <div className="ml-3">
              <p className="font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@carrental.com</p>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
            View Profile
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
