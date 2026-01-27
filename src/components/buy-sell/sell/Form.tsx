import { FaCloudUploadAlt, FaPaperPlane } from "react-icons/fa";

import Button from "@/components/Button";

const SellForm = () => {
  return (
    <form id="sell-form" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Car Brand *
          </label>
          <input
            type="text"
            name="brand"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Car Model *
          </label>
          <input
            type="text"
            name="model"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Year *
          </label>
          <input
            type="number"
            name="year"
            min={1990}
            max={2024}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Mileage *
          </label>
          <input
            type="number"
            name="mileage"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Condition *
          </label>
          <select
            name="condition"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Select condition</option>
            <option value="excellent">Excellent</option>
            <option value="verygood">Very Good</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Expected Price ($)
        </label>
        <input
          type="number"
          name="price"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Description *
        </label>
        <textarea
          name="description"
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue={""}
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Upload Photos
        </label>
        <div
          id="image-preview"
          className="image-upload-area border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors"
        >
          <div className="text-center flex flex-col items-center">
            <FaCloudUploadAlt className="text-4xl text-gray-400 mb-2" />
            <p className="text-gray-500">Click to upload car photos</p>
            <p className="text-sm text-gray-400">Max 5MB per image</p>
          </div>
        </div>
        <input
          type="file"
          id="car-images"
          accept="image/*"
          multiple
          className="hidden"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button type="submit" className="w-full">
        <FaPaperPlane /> Submit Car for Listing
      </Button>
    </form>
  );
};

export default SellForm;
