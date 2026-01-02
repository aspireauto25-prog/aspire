import Logo from "../Logo";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-dark-800 shadow-lg z-20">
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200 dark:border-dark-700">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
        </div>
        {/* User Profile */}
        <div className="p-6 border-b border-gray-200 dark:border-dark-700">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AJ</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-dark-800" />
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-800 dark:text-white">
                Admin Johnson
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                admin@carrental.com
              </p>
            </div>
          </div>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Dashboard
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-tachometer-alt mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-chart-line mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Analytics</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-calendar-alt mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Calendar</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Inventory
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-car mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Cars for Rent</span>
                  <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
                    12
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-tag mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Cars for Sale</span>
                  <span className="ml-auto bg-green-500 text-white text-xs rounded-full px-2 py-1">
                    8
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-wrench mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Service Requests</span>
                  <span className="ml-auto bg-yellow-500 text-white text-xs rounded-full px-2 py-1">
                    5
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Customer Management
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-users mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Customers</span>
                  <span className="ml-auto bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                    42
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link active flex items-center px-3 py-3 rounded-lg mb-1"
                >
                  <i className="fas fa-inbox mr-3" />
                  <span>Contact Inquiries</span>
                  <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
                    24
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-comments mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Messages</span>
                  <span className="ml-auto bg-purple-500 text-white text-xs rounded-full px-2 py-1">
                    16
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-star mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Reviews</span>
                  <span className="ml-auto bg-indigo-500 text-white text-xs rounded-full px-2 py-1">
                    32
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Bookings &amp; Transactions
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-calendar-check mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Reservations</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-receipt mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Invoices</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-credit-card mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Payments</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-3">
              Settings
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-cog mr-3 text-gray-500 dark:text-gray-400" />
                  <span>General Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-user-cog mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg mb-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-moon mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Dark Mode</span>
                  <div className="ml-auto">
                    <button
                      id="darkModeToggle"
                      className="w-10 h-5 rounded-full bg-gray-300 dark:bg-dark-600 relative"
                    >
                      <div className="toggle-circle absolute w-4 h-4 rounded-full bg-white top-0.5 left-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Logout Button */}
        <div className="p-4 border-t  border-gray-200 dark:border-dark-700">
          <button className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600">
            <i className="fas fa-sign-out-alt mr-2" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          id="mobileSidebarToggle"
          className="p-2 rounded-lg bg-primary text-white shadow-lg"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
      {/* Mobile Sidebar */}
      <aside
        id="mobileSidebar"
        className="mobile-sidebar fixed inset-0 z-40 flex md:hidden"
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          id="sidebarOverlay"
        />
        {/* Sidebar Content */}
        <div className="relative w-64 bg-white dark:bg-dark-800 h-full shadow-xl flex flex-col">
          {/* Close Button */}
          <div className="absolute top-4 right-4">
            <button
              id="closeMobileSidebar"
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          {/* Logo */}
          <div className="p-6 border-b border-gray-200 dark:border-dark-700">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mr-3">
                <i className="fas fa-car text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                  CarRental Pro
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Admin Panel
                </p>
              </div>
            </div>
          </div>
          {/* Mobile Navigation (Simplified) */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-tachometer-alt mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-car mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Cars for Rent</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link active flex items-center px-3 py-3 rounded-lg"
                >
                  <i className="fas fa-inbox mr-3" />
                  <span>Contact Inquiries</span>
                  <span className="ml-auto bg-primary text-white text-xs rounded-full px-2 py-1">
                    24
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-users mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-cog mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="sidebar-link flex items-center px-3 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
                >
                  <i className="fas fa-moon mr-3 text-gray-500 dark:text-gray-400" />
                  <span>Dark Mode</span>
                  <div className="ml-auto">
                    <button
                      id="mobileDarkModeToggle"
                      className="w-10 h-5 rounded-full bg-gray-300 dark:bg-dark-600 relative"
                    >
                      <div className="toggle-circle absolute w-4 h-4 rounded-full bg-white top-0.5 left-0.5" />
                    </button>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
