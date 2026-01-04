import Button from "@/components/Button";
import OutlinedButton from "@/components/OutlinedButton";
import Image from "next/image";
import { FaCloudUploadAlt, FaSave } from "react-icons/fa";

const AddCarPage = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Add New Car</h3>
      </div>
      <form id="carForm" className="space-y-6">
        {/* Car Basic Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
            Basic Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Brand <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="brand"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Model <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="model"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Year <span className="text-red-500">*</span>
              </label>
              <select
                name="year"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              >
                <option>Select Year</option>
                <option value={2023}>2023</option>
                <option value={2022}>2022</option>
                <option value={2021}>2021</option>
                <option value={2020}>2020</option>
                <option value={2019}>2019</option>
                <option value={2018}>2018</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Vehicle Type <span className="text-red-500">*</span>
              </label>
              <select
                name="type"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              >
                <option>Select Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="coupe">Coupe</option>
                <option value="hatchback">Hatchback</option>
                <option value="convertible">Convertible</option>
                <option value="van">Van</option>
                <option value="truck">Truck</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Transmission <span className="text-red-500">*</span>
              </label>
              <select
                name="transmission"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              >
                <option>Select Transmission</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
                <option value="semi-automatic">Semi-Automatic</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-500 text-sm font-medium mb-2">
                Fuel Type <span className="text-red-500">*</span>
              </label>
              <select
                name="fuel"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              >
                <option>Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="cng">CNG</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Color
              </label>
              <input
                type="text"
                name="color"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                License Plate
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="licensePlate"
                required
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                VIN (Vehicle Identification Number)
              </label>
              <input
                type="text"
                name="vin"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Mileage (km)
              </label>
              <input
                type="number"
                name="mileage"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Seating Capacity
              </label>
              <input
                type="number"
                name="seats"
                min={1}
                max={20}
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Doors
              </label>
              <input
                type="number"
                name="doors"
                min={2}
                max={6}
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
        {/* Pricing & Availability */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
            Pricing &amp; Availability
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Daily Rate ($)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="dailyRate"
                required
                min={0}
                step="0.01"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Weekly Rate ($)
              </label>
              <input
                type="number"
                name="weeklyRate"
                min={0}
                step="0.01"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Monthly Rate ($)
              </label>
              <input
                type="number"
                name="monthlyRate"
                min={0}
                step="0.01"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Security Deposit ($)
              </label>
              <input
                type="number"
                name="deposit"
                min={0}
                step="0.01"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Availability Status
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    defaultValue="available"
                    defaultChecked
                    className="mr-2 text-primary"
                  />
                  <span>Available</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    defaultValue="rented"
                    className="mr-2 text-primary"
                  />
                  <span>Rented</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    defaultValue="maintenance"
                    className="mr-2 text-primary"
                  />
                  <span>Maintenance</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    defaultValue="unavailable"
                    className="mr-2 text-primary"
                  />
                  <span>Unavailable</span>
                </label>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center justify-between">
                <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium">
                  Featured Car
                </label>
                <div className="relative inline-block w-12 align-middle select-none">
                  <input
                    type="checkbox"
                    name="featured"
                    id="featuredToggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="featuredToggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Featured cars appear on homepage
              </p>
            </div>
          </div>
        </div>
        {/* Features & Specifications */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
            Features &amp; Specifications
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="airConditioning"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Air Conditioning</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="bluetooth"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Bluetooth</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="navigation"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>GPS Navigation</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="heatedSeats"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Heated Seats</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="sunroof"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Sunroof</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="backupCamera"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Backup Camera</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="cruiseControl"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Cruise Control</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="features[]"
                defaultValue="keylessEntry"
                className="mr-2 rounded border-gray-300 text-primary"
              />
              <span>Keyless Entry</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Engine Size (L)
              </label>
              <input
                type="text"
                name="engineSize"
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
                Horsepower
              </label>
              <input
                type="number"
                name="horsepower"
                min={0}
                className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>
          </div>
        </div>
        {/* Images */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
            Car Images
          </h4>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
              Main Image <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-500 text-sm mb-4">
              This will be the primary image displayed for the car
            </p>
            <div className="file-upload">
              <label
                htmlFor="mainImage"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">
                  Click to upload main image
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  PNG, JPG, GIF up to 5MB
                </p>
                <input
                  type="file"
                  id="mainImage"
                  name="mainImage"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <div id="mainImagePreview" className="mt-4 hidden">
                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                <Image
                  src={""}
                  className="h-40 rounded-lg border border-gray-300 dark:border-gray-700 "
                  alt=""
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
              Additional Images
            </label>
            <p className="text-gray-500 text-sm mb-4">
              Upload multiple images to showcase the car
            </p>
            <div className="file-upload">
              <label
                htmlFor="additionalImages"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <i className="fas fa-images text-3xl text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">
                  Click to upload additional images
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  You can select multiple files
                </p>
                <input
                  type="file"
                  id="additionalImages"
                  name="additionalImages"
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </label>
              <div
                id="additionalImagesPreview"
                className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
            Description
          </h4>
          <div>
            <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              rows={5}
              required
              className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              placeholder="Enter detailed description of the car..."
              defaultValue={""}
            />
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-400  text-sm font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              name="notes"
              rows={3}
              className="w-full border border-gray-300 dark:border-gray-700  rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              placeholder="Any additional notes or special instructions..."
              defaultValue={""}
            />
          </div>
        </div>
        {/* Form Actions */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-600 flex justify-end space-x-4">
          <OutlinedButton type="button" size="md">
            Cancel
          </OutlinedButton>
          <Button type="submit" size="md">
            <FaSave />
            Save Car
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCarPage;
