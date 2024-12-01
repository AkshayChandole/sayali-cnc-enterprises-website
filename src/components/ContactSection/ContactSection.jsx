import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useState } from "react"; // Added useState to manage spinner state
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const GMAP_LOCATION_LINK = import.meta.env.VITE_GMAP_LOCATION_LINK;
const GMAP_EMBED_LINK = import.meta.env.VITE_GMAP_EMBED_LINK;
const EMAIL_ID=import.meta.env.VITE_COMPANY_EMAIL_ID;
const ADDRESS=import.meta.env.VITE_COMPANY_ADDRESS;
const FOUNDER_MOBILE_NUMBER=import.meta.env.VITE_FOUNDER_MOBILE_NUMBER;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const mobile = e.target.mobile.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !mobile || !email) {
        toast.error("Please fill in all required fields: Name, Mobile, and Email."); // Show an error toast
        return;
    }

    setIsSubmitting(true); // Show the spinner before sending the email

    try {
      // Initialize EmailJS with correct public and private keys
      emailjs.init(EMAILJS_PUBLIC_KEY); // Public Key

      // Configure EmailJS service
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID,
        {
          name,
          mobile,
          email,
          message,
        }
      );

      if (result.status === 200) {
        toast.success("Thanks for reaching out! We've received your message and will respond shortly."); // Show a success toast
      }
    } catch (error) {
      console.error("Failed to send email", error);
      toast.error("Failed to send email. Please try again."); // Show an error toast
    } finally {
      setIsSubmitting(false); // Hide the spinner after receiving success or error
    }
  };

  return (
    <section id="contact" className="bg-gray-50 p-8 md:p-16">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Get in touch with us for any inquiries or quotes.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Form Section */}
        <form
          onSubmit={submitHandler}
          className="md:w-1/2 space-y-6 max-w-4xl mx-auto relative"
        >
          <div>
            <label className="block text-lg font-semibold text-red-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-red-700 mb-2">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-red-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-red-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
              rows="6"
              placeholder="Write your message here"
            ></textarea>
          </div>
          
          {/* Centered spinner */}
          {isSubmitting && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 rounded-md">
              <FaSpinner className="animate-spin text-white text-4xl" />
            </div>
          )}

          <button
            type="submit"
            className="w-full p-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            disabled={isSubmitting} // Disable button while submitting
          >
            Submit
          </button>
        </form>
        {/* Contact Information Section */}
        <div className="md:w-1/2 bg-white p-6 rounded-md shadow-md md:ml-8">
          <h3 className="text-lg text-red-700 font-bold">Get in touch</h3>
          <p className="text-gray-700 flex items-center hover:text-red-600 transition">
            <FaPhoneAlt className="text-red-600 mr-2" />
            <a href={`tel:${FOUNDER_MOBILE_NUMBER.replaceAll(" ","")}`} className="no-underline">
              {FOUNDER_MOBILE_NUMBER}
            </a>
          </p>
          <p className="text-gray-700 flex items-center hover:text-red-600 transition">
            <FaEnvelope className="text-red-600 mr-2" />
            <a
              href={`mailto:${EMAIL_ID}`}
              className="no-underline"
            >
              {EMAIL_ID}
            </a>
          </p>
          <p className="text-gray-700 flex items-center hover:text-red-600 transition">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            <a
              href={GMAP_LOCATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              {ADDRESS}
            </a>
          </p>
          <h3 className="text-lg text-red-700 font-bold mt-4">Hours</h3>
          <ul className="list-disc list-inside">
            <li>Monday: 8:00am - 8:00pm</li>
            <li>Tuesday: 8:00am - 8:00pm</li>
            <li>Wednesday: 8:00am - 8:00pm</li>
            <li>Thursday: Closed</li>
            <li>Friday: 8:00am - 8:00pm</li>
            <li>Saturday: 8:00am - 8:00pm</li>
            <li>Sunday: 8:00am - 8:00pm</li>
          </ul>

          {/* Embedded Google Map */}
          <div className="mt-6">
            <iframe
              src={GMAP_EMBED_LINK}
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0 rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
