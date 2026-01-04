import { FaCar, FaInbox, FaKey, FaTag } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Total Cars for Rent</p>
              <h3 className="text-2xl font-bold mt-2">12</h3>
              <p className="text-green-500 text-xs mt-1">+2 from last month</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <FaCar className=" text-blue-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Cars for Sale</p>
              <h3 className="text-2xl font-bold mt-2">8</h3>
              <p className="text-green-500 text-xs mt-1">+1 from last week</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <FaTag className=" text-green-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Active Rentals</p>
              <h3 className="text-2xl font-bold mt-2">9</h3>
              <p className="text-red-500 text-xs mt-1">-1 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <FaKey className=" text-yellow-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Pending Contacts</p>
              <h3 className="text-2xl font-bold mt-2">24</h3>
              <p className="text-green-500 text-xs mt-1">+5 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50">
              <FaInbox className="text-primary text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Recent Rentals</h3>
            <a href="#" className="text-primary text-sm font-medium">
              View All
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-500 font-medium">
                    Customer
                  </th>
                  <th className="text-left py-3 text-gray-500 font-medium">
                    Car
                  </th>
                  <th className="text-left py-3 text-gray-500 font-medium">
                    Period
                  </th>
                  <th className="text-left py-3 text-gray-500 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">John Smith</td>
                  <td className="py-3">Toyota Camry</td>
                  <td className="py-3">May 12-19</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Emma Johnson</td>
                  <td className="py-3">BMW X5</td>
                  <td className="py-3">May 10-17</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">Michael Brown</td>
                  <td className="py-3">Honda Civic</td>
                  <td className="py-3">May 15-22</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">Sarah Davis</td>
                  <td className="py-3">Mercedes C-Class</td>
                  <td className="py-3">May 18-25</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Service Requests</h3>
            <a href="#" className="text-primary text-sm font-medium">
              View All
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium">Oil Change</p>
                <p className="text-gray-500 text-sm">Toyota Camry • AB123CD</p>
              </div>
              <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                High Priority
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium">Brake Service</p>
                <p className="text-gray-500 text-sm">Honda Civic • EF456GH</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Medium
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium">Tire Replacement</p>
                <p className="text-gray-500 text-sm">BMW X5 • IJ789KL</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Low
              </span>
            </div>
            <div className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div>
                <p className="font-medium">AC Repair</p>
                <p className="text-gray-500 text-sm">
                  Mercedes C-Class • MN012OP
                </p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Medium
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  dark:bg-gray-800 rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-6">
          Recent Contact Form Submissions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 text-gray-500 font-medium">
                  Name
                </th>
                <th className="text-left py-3 text-gray-500 font-medium">
                  Email
                </th>
                <th className="text-left py-3 text-gray-500 font-medium">
                  Subject
                </th>
                <th className="text-left py-3 text-gray-500 font-medium">
                  Date
                </th>
                <th className="text-left py-3 text-gray-500 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Robert Wilson</td>
                <td className="py-3">robert@email.com</td>
                <td className="py-3">Car Rental Inquiry</td>
                <td className="py-3">May 15, 2023</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">Lisa Taylor</td>
                <td className="py-3">lisa@email.com</td>
                <td className="py-3">Car for Sale Question</td>
                <td className="py-3">May 14, 2023</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Replied
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <td className="py-3">David Miller</td>
                <td className="py-3">david@email.com</td>
                <td className="py-3">Service Appointment</td>
                <td className="py-3">May 13, 2023</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    In Progress
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3">Maria Garcia</td>
                <td className="py-3">maria@email.com</td>
                <td className="py-3">Long-term Rental</td>
                <td className="py-3">May 12, 2023</td>
                <td className="py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Replied
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
