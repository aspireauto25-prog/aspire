"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ContactInquiry } from "@/lib/types/contact.types";
import { sendContactInquiry } from "@/api/axios/contactInquiries";
import { subjects } from "@/constants/contact";
import Button from "../Button";
import useRequest from "@/hooks/useRequest";

interface FormData {
  email: string;
  message: string;
  name: string;
  phone: string;
  subject: string;
}

const ContactForm = () => {
  const { handleSubmit, register, reset } = useForm<FormData>();

  const { error, loading, run, success } = useRequest((data) =>
    sendContactInquiry(data as ContactInquiry),
  );

  useEffect(() => {
    if (success) {
      toast.success("Message sent successfully!");

      reset();
    }

    if (error) {
      toast.error("Failed to send message.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, error]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(run)}>
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
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("name")}
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
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("email")}
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
            Phone Number *
          </label>
          <input
            type="text"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            required
            {...register("phone")}
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
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("subject")}
          >
            <option value="">Select a subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
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
          rows={6}
          required
          minLength={10}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-light dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          {...register("message")}
        />
        <div id="message-error" className="text-red-500 text-sm mt-1" />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        <FaPaperPlane />
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
