const Filters = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-lg font-medium">
        All
      </button>
      <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
        New
      </button>
      <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
        Pending
      </button>
      <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
        Responded
      </button>
    </div>
  );
};

export default Filters;
