import Sidebar from "@/components/admin/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm py-4 px-6">
          <div className="flex justify-between items-center">
            <div>
              <h2
                className="text-xl font-semibold text-gray-800"
                id="pageTitle"
              >
                Dashboard
              </h2>
              <p className="text-gray-500 text-sm">Welcome back, Admin</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <i className="fas fa-bell text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                </button>
              </div>
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <i className="fas fa-envelope text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
                </button>
              </div>
              <div className="border-l pl-4">
                <button className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <span className="ml-2 font-medium hidden md:inline">
                    Admin User
                  </span>
                  <i className="fas fa-chevron-down ml-1 text-gray-500 hidden md:inline" />
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
