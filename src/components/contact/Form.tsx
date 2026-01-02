import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <form id="contact-form" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div id="name-error" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div id="email-error" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div id="phone-error" className="text-red-500 text-sm mt-1" />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Select a subject</option>
            <option value="rental">Car Rental Inquiry</option>
            <option value="servicing">Car Servicing</option>
            <option value="support">Technical Support</option>
            <option value="corporate">Corporate/Business</option>
            <option value="feedback">Feedback/Suggestion</option>
            <option value="other">Other</option>
          </select>
          <div id="subject-error" className="text-red-500 text-sm mt-1" />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          defaultValue={""}
        />
        <div id="message-error" className="text-red-500 text-sm mt-1" />
      </div>
      <button
        type="submit"
        id="submit-btn"
        className="btn-primary w-full py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <FaPaperPlane className="mr-3" /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
