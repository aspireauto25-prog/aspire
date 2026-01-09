import {
  FaBookmark,
  FaCar,
  FaCloudUploadAlt,
  FaCogs,
  FaImages,
  FaSave,
  FaStar,
} from "react-icons/fa";

import Button from "@/components/Button";

const AddCarPage = () => {
  return (
    <section className="bg-white rounded-xl shadow overflow-hidden">
      <form>
        {/* Basic Information Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Basic Information
              </h2>
              <p className="text-gray-600 text-sm">
                Primary details about the car
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Brand */}
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Brand *
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. Toyota, BMW, Tesla"
                required
              />
            </div>
            {/* Model */}
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Model *
              </label>
              <input
                type="text"
                id="model"
                name="model"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. Camry, Model 3, X5"
                required
              />
            </div>
            {/* Variant */}
            <div>
              <label
                htmlFor="variant"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Variant / Trim
              </label>
              <input
                type="text"
                id="variant"
                name="variant"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. SE, Limited, Performance"
              />
            </div>
            {/* Year */}
            <div>
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Year *
              </label>
              <input
                type="number"
                min="1900"
                max="2099"
                step="1"
                id="year"
                name="year"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g. 2025"
              />
            </div>
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category *
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
              >
                <option>Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Minivan">Minivan</option>
                <option value="Sports Car">Sports Car</option>
                <option value="Electric Vehicle">Electric Vehicle</option>
                <option value="Luxury">Luxury</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price ($) *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min={0}
                  step={100}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0.0"
                  required
                />
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="mt-6">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
              placeholder="Provide a detailed description of the car..."
              defaultValue={""}
            />
          </div>
        </div>
        {/* Technical Specifications Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaCogs />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Technical Specifications
              </h2>
              <p className="text-gray-600 text-sm">
                Mechanical and performance details
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chassis Number */}
            <div>
              <label
                htmlFor="chassisNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Chassis Number (VIN) *
              </label>
              <input
                type="text"
                id="chassisNumber"
                name="chassisNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200 font-mono"
                placeholder="17-character VIN"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Vehicle Identification Number
              </p>
            </div>
            {/* Engine Number */}
            <div>
              <label
                htmlFor="engineNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Engine Number
              </label>
              <input
                type="text"
                id="engineNumber"
                name="engineNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200 font-mono"
                placeholder="Engine serial number"
              />
            </div>
            {/* Mileage */}
            <div>
              <label
                htmlFor="mileage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mileage (miles)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="mileage"
                  name="mileage"
                  min={0}
                  step={100}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">miles</span>
                </div>
              </div>
            </div>
            {/* Engine Capacity */}
            <div>
              <label
                htmlFor="engineCapacity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Engine Capacity
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="engineCapacity"
                  name="engineCapacity"
                  min={0}
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                  placeholder="0.0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">L</span>
                </div>
              </div>
            </div>
            {/* Fuel Type */}
            <div>
              <label
                htmlFor="fuel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Fuel Type *
              </label>
              <select
                id="fuel"
                name="fuel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
              >
                <option>Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Plug-in Hybrid">Plug-in Hybrid</option>
                <option value="CNG">CNG</option>
                <option value="LPG">LPG</option>
              </select>
            </div>
            {/* Transmission */}
            <div>
              <label
                htmlFor="transmission"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Transmission *
              </label>
              <select
                id="transmission"
                name="transmission"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
              >
                <option>Select Transmission</option>
                <option value="Manual">Manual</option>
                <option value="Automatic">Automatic</option>
                <option value="CVT">CVT</option>
                <option value="Dual-Clutch">Dual-Clutch</option>
                <option value="Semi-Automatic">Semi-Automatic</option>
              </select>
            </div>
            {/* Drive Type */}
            <div>
              <label
                htmlFor="driveType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Drive Type
              </label>
              <select
                id="driveType"
                name="driveType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
              >
                <option>Select Drive Type</option>
                <option value="FWD">Front-Wheel Drive (FWD)</option>
                <option value="RWD">Rear-Wheel Drive (RWD)</option>
                <option value="AWD">All-Wheel Drive (AWD)</option>
                <option value="4WD">Four-Wheel Drive (4WD)</option>
              </select>
            </div>
            {/* No. of Seats */}
            <div>
              <label
                htmlFor="seats"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Number of Seats *
              </label>
              <select
                id="seats"
                name="seats"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                required
              >
                <option>Select Seats</option>
                <option value={2}>2 Seats</option>
                <option value={4}>4 Seats</option>
                <option value={5}>5 Seats</option>
                <option value={6}>6 Seats</option>
                <option value={7}>7 Seats</option>
                <option value={8}>8 Seats</option>
                <option value={9}>9+ Seats</option>
              </select>
            </div>
            {/* Color */}
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Color
              </label>
              <input
                type="text"
                id="color"
                name="color"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
                placeholder="e.g., Midnight Black, Pearl White"
              />
            </div>
          </div>
        </div>
        {/* Features & Equipment Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaStar />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Features &amp; Equipment
              </h2>
              <p className="text-gray-600 text-sm">
                Select all available features and amenities
              </p>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Safety Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="ABS"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">ABS</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Airbags"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Airbags</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Stability Control"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Stability Control</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Rear Camera"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Rear Camera</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Parking Sensors"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Parking Sensors</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Lane Assist"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Lane Assist</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Blind Spot Monitor"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Blind Spot Monitor</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Adaptive Cruise"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Adaptive Cruise</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Comfort &amp; Convenience
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Air Conditioning"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Air Conditioning</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Power Windows"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Power Windows</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Power Seats"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Power Seats</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Heated Seats"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Heated Seats</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Sunroof"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Sunroof</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Keyless Entry"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Keyless Entry</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Push Button Start"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Push Button Start</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Remote Start"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Remote Start</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Entertainment &amp; Technology
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Touchscreen"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Touchscreen</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Navigation"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Navigation</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Bluetooth"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Bluetooth</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Apple CarPlay"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Apple CarPlay</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Android Auto"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Android Auto</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Premium Sound"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Premium Sound</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="USB Ports"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">USB Ports</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  defaultValue="Wireless Charging"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded custom-checkbox"
                />
                <span className="ml-2 text-gray-700">Wireless Charging</span>
              </label>
            </div>
          </div>
          {/* Additional Features Input */}
          <div>
            <label
              htmlFor="additionalFeatures"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Features (comma separated)
            </label>
            <input
              type="text"
              id="additionalFeatures"
              name="additionalFeatures"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-200 focus:border-red-400 focus:outline-none transition duration-200"
              placeholder="e.g., panoramic roof, heated steering wheel, ambient lighting"
            />
            <p className="text-xs text-gray-500 mt-1">
              Add any features not listed above
            </p>
          </div>
        </div>
        {/* Media & Images Section */}
        <div className="form-section p-6 border-b border-gray-100">
          <div className="flex items-center mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center text-white mr-4">
              <FaImages />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Media &amp; Images
              </h2>
              <p className="text-gray-600 text-sm">Upload photos of the car</p>
            </div>
          </div>
          {/* Featured Image */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image *
            </label>
            <p className="text-sm text-gray-500 mb-4">
              This will be the main image displayed for the car
            </p>
            <div
              className="image-upload-area rounded-xl p-8 text-center cursor-pointer"
              id="featuredImageUpload"
            >
              <div className="max-w-xs mx-auto">
                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <FaCloudUploadAlt className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Click to upload featured image
                </h3>
                <p className="text-gray-500 text-sm">
                  PNG, JPG or GIF up to 5MB
                </p>
                <div className="mt-4 flex justify-center">
                  <Button type="button" size="sm">
                    Browse Files
                  </Button>
                </div>
              </div>
              <input
                type="file"
                id="featuredImage"
                name="featuredImage"
                className="hidden"
                accept="image/*"
                required
              />
            </div>
            <div className="mt-4 hidden" id="featuredImagePreview">
              <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center">
                  {/* <img
                      id="featuredImagePreviewImg"
                      src=""
                      alt="Featured image preview"
                      className="h-16 w-24 object-cover rounded"
                    /> */}
                  <div className="ml-4">
                    <p
                      id="featuredImageName"
                      className="font-medium text-gray-800"
                    />
                    <p
                      id="featuredImageSize"
                      className="text-sm text-gray-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  id="removeFeaturedImage"
                  className="text-red-600 hover:text-red-800"
                >
                  <i className="fas fa-trash" />
                </button>
              </div>
            </div>
          </div>
          {/* Additional Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Images
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Upload multiple images showing different angles and features
            </p>
            <div
              className="image-upload-area rounded-xl p-8 text-center cursor-pointer"
              id="additionalImagesUpload"
            >
              <div className="max-w-xs mx-auto">
                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <FaImages className="fas fa-images text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Drag &amp; drop or click to upload
                </h3>
                <p className="text-gray-500 text-sm">
                  Upload up to 10 images (5MB each)
                </p>
                <div className="mt-4 flex justify-center">
                  <Button type="button" size="sm" theme="light">
                    Select Images
                  </Button>
                </div>
              </div>
              <input
                type="file"
                id="additionalImages"
                name="additionalImages"
                className="hidden"
                accept="image/*"
                multiple
              />
            </div>
            <div className="mt-4 hidden" id="additionalImagesPreview">
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                id="additionalImagesList"
              >
                {/* Additional images will be previewed here */}
              </div>
            </div>
          </div>
        </div>
        {/* Form Actions */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              <p>Fields marked with * are required</p>
            </div>
            <div className="flex space-x-4">
              <Button type="button" theme="light" size="md">
                <FaBookmark />
                Save as Draft
              </Button>

              <Button type="submit" size="md">
                <FaSave />
                Add Car to Inventory
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddCarPage;
