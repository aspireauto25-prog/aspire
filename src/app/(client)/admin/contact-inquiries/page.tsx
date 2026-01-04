const ContactInquiresPage = () => {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-dark-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Total Inquiries
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                156
              </h3>
              <p className="text-green-500 text-xs mt-1">
                +12% from last month
              </p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <i className="fas fa-inbox text-blue-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-dark-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Pending Replies
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                24
              </h3>
              <p className="text-yellow-500 text-xs mt-1">+3 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <i className="fas fa-clock text-yellow-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-dark-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Avg Response Time
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                4.2h
              </h3>
              <p className="text-green-500 text-xs mt-1">
                -0.8h from last week
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <i className="fas fa-tachometer-alt text-green-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-dark-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Resolved Today
              </p>
              <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                8
              </h3>
              <p className="text-blue-500 text-xs mt-1">+2 from yesterday</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <i className="fas fa-check-circle text-purple-500 text-xl" />
            </div>
          </div>
        </div>
      </div>
      {/* Filters and Actions */}
      <div className="mb-6 bg-white dark:bg-dark-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-dark-700">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              All Contact Inquiries
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage customer inquiries from website contact forms
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200">
              <i className="fas fa-plus mr-2" />
              New Reply
            </button>
            <button className="px-4 py-2 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-dark-600">
              <i className="fas fa-download mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-dark-600">
              <i className="fas fa-filter mr-2" />
              Filter
            </button>
          </div>
        </div>
        {/* Quick Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg font-medium">
            All
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600">
            New
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600">
            Pending
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600">
            Replied
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600">
            In Progress
          </button>
          <button className="px-3 py-1.5 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-dark-600">
            Spam
          </button>
        </div>
      </div>
      {/* Contact Inquiries Table */}
      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-dark-700">
        <div className="table-responsive">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Customer
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Contact Info
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Subject
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Message
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-gray-500 dark:text-gray-400 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-dark-700">
              {/* Row 1 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">RS</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        Robert Smith
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Car Rental Inquiry
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    robert.smith@email.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (555) 123-4567
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Weekly Car Rental
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Need car for 2 weeks
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    I&apos;m interested in renting a car for my vacation next
                    month. I need a SUV for 2 weeks starting from June 15th...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Today, 10:30 AM
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    2 hours ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-new">New</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg"
                      title="Reply"
                    >
                      <i className="fas fa-reply" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg"
                      title="Mark as Spam"
                    >
                      <i className="fas fa-ban" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-green-500 to-emerald-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">LT</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        Lisa Taylor
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Car Purchase
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    lisa.taylor@email.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (555) 987-6543
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    BMW X5 Availability
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Interested in purchase
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    Is the 2021 BMW X5 still available for sale? I saw it on
                    your website and would like to schedule a test drive...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Yesterday, 3:45 PM
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    1 day ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-replied">Replied</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="Mark as Done"
                    >
                      <i className="fas fa-check" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg"
                      title="Archive"
                    >
                      <i className="fas fa-archive" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-pink-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        Michael Johnson
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Service Appointment
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    m.johnson@email.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (555) 456-7890
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Urgent: Brake Service
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Needs immediate attention
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    I need to schedule an urgent brake service for my Honda
                    Civic. The brakes are making a strange noise and I&apos;m
                    concerned about safety...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    May 15, 2023
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    2 days ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-in-progress">
                    In Progress
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg"
                      title="Reply"
                    >
                      <i className="fas fa-reply" />
                    </button>
                    <button
                      className="p-2 text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 rounded-lg"
                      title="Assign to Staff"
                    >
                      <i className="fas fa-user-tag" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-orange-500 to-amber-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">SG</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        Sarah Garcia
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Long-term Rental
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    sarah.g@email.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (555) 321-0987
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    3-Month Corporate Lease
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    For business use
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    Our company is looking for a 3-month car lease for our
                    visiting executive. We need a luxury sedan with all
                    amenities...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    May 14, 2023
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    3 days ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-pending">Pending</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg"
                      title="Reply"
                    >
                      <i className="fas fa-reply" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg"
                      title="Archive"
                    >
                      <i className="fas fa-archive" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-red-500 to-rose-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">DW</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        David Wilson
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Insurance Question
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    d.wilson@email.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (555) 654-3210
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    Insurance Coverage Details
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Rental insurance query
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    I would like to know more about the insurance coverage
                    included with your car rentals. What&apos;s covered and what
                    are the deductibles...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    May 12, 2023
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    5 days ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-replied">Replied</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg"
                      title="Mark as Done"
                    >
                      <i className="fas fa-check" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                    <button
                      className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg"
                      title="Archive"
                    >
                      <i className="fas fa-archive" />
                    </button>
                  </div>
                </td>
              </tr>
              {/* Row 6 */}
              <tr className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-800"
                  />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-gray-500 to-slate-400 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">SP</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">
                        Spam Prevention
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Promotional email
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    promo@fake-company.com
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    (000) 000-0000
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    SEO Services Offer
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Promotional content
                  </p>
                </td>
                <td className="py-4 px-6 max-w-xs">
                  <p className="text-gray-700 dark:text-gray-300 truncate">
                    We can improve your website SEO ranking and drive more
                    traffic to your car rental business. Our services start at
                    just $99/month...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <p className="font-medium text-gray-800 dark:text-white">
                    May 10, 2023
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    7 days ago
                  </p>
                </td>
                <td className="py-4 px-6">
                  <span className="status-badge status-spam">Spam</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg"
                      title="Delete"
                    >
                      <i className="fas fa-trash" />
                    </button>
                    <button
                      className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg"
                      title="View Details"
                    >
                      <i className="fas fa-eye" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-dark-700 flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Showing
              <span className="font-medium text-gray-700 dark:text-gray-300">
                1
              </span>
              to
              <span className="font-medium text-gray-700 dark:text-gray-300">
                6
              </span>
              of
              <span className="font-medium text-gray-700 dark:text-gray-300">
                24
              </span>
              inquiries
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 border border-gray-300 dark:border-dark-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-700">
              <i className="fas fa-chevron-left" />
            </button>
            <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-sm">
              1
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-dark-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-700">
              2
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-dark-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-700">
              3
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-dark-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-700">
              4
            </button>
            <button className="px-3 py-1.5 border border-gray-300 dark:border-dark-600 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-700">
              <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
      {/* Empty State (Hidden by default) */}
      <div
        id="emptyState"
        className="hidden bg-white dark:bg-dark-800 rounded-xl shadow-sm p-12 text-center border border-gray-200 dark:border-dark-700"
      >
        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-inbox text-3xl text-gray-400 dark:text-gray-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          No inquiries found
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          All contact inquiries have been processed or no inquiries match your
          filters.
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-red-700">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default ContactInquiresPage;
