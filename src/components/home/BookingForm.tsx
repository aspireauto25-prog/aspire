import {
  FaCalendarAlt,
  FaCar,
  FaCheckCircle,
  FaMapMarkedAlt,
} from "react-icons/fa";

const BookingForm = () => {
  return (
    <section
      id="booking"
      className="py-20 bg-linear-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full opacity-10 -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full opacity-10 translate-x-48 translate-y-48" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/20 mb-4 backdrop-blur-sm">
            <span className="text-primary font-bold">
              QUICK &amp; EASY BOOKING
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="text-primary">Dream Car</span> Now
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reserve your vehicle in just 3 simple steps. Enjoy flexible pickup
            times and locations.
          </p>
        </div>
        {/* Booking Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className="text-center p-8 rounded-2xl glass-effect backdrop-blur-sm slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4">Choose Your Car</h3>
            <p className="text-gray-300">
              Select from our premium fleet of vehicles
            </p>
          </div>
          <div
            className="text-center p-8 rounded-2xl glass-effect backdrop-blur-sm slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4">Select Dates</h3>
            <p className="text-gray-300">
              Pick your rental period and location
            </p>
          </div>
          <div
            className="text-center p-8 rounded-2xl glass-effect backdrop-blur-sm slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-3xl text-primary">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4">Confirm &amp; Drive</h3>
            <p className="text-gray-300">Complete payment and hit the road</p>
          </div>
        </div>
        {/* Booking Form */}
        <div id="booking-section" className="max-w-4xl mx-auto">
          <div
            id="booking-form"
            className="bg-white/10 dark:bg-black/30 rounded-3xl p-8 backdrop-blur-lg border border-white/20 shadow-2xl zoom-in"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-white mb-4 font-bold text-lg">
                  Select Car
                </label>
                <div className="relative">
                  <FaCar className="absolute left-4 top-4 text-primary text-xl" />
                  <select
                    id="booking-car-select"
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white"
                  >
                    <option>Choose a car</option>
                    <option value="Honda Accord">Honda Accord - $45/day</option>
                    <option value="Hyundai i20">Hyundai i20 - $32/day</option>
                    <option value="Toyota Fortuner">
                      Toyota Fortuner - $85/day
                    </option>
                    <option value="Mercedes-Benz C-Class">
                      Mercedes-Benz C-Class - $120/day
                    </option>
                    <option value="Tesla Model 3">
                      Tesla Model 3 - $95/day
                    </option>
                    <option value="BMW 3 Series">BMW 3 Series - $90/day</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-white mb-4 font-bold text-lg">
                  Pickup Location
                </label>
                <div className="relative">
                  <FaMapMarkedAlt className="absolute left-4 top-4 text-primary text-xl" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white"
                    placeholder="Choose your pickup location"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-4 font-bold text-lg">
                  Pickup Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-4 text-primary text-xl" />
                  <input
                    type="date"
                    id="pickup-date"
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white mb-4 font-bold text-lg">
                  Dropoff Date
                </label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-4 text-primary text-xl" />
                  <input
                    type="date"
                    id="dropoff-date"
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn-primary px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform inline-flex items-center justify-center">
                <FaCheckCircle className="mr-3" /> Confirm Booking Now
              </button>
              <p className="text-gray-400 mt-4">
                Free cancellation up to 24 hours before pickup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
