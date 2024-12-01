import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useState } from "react"; // Added useState to manage spinner state
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const GMapLocationLink = "https://maps.app.goo.gl/CawfC4xpkFqUzs3A7";
const GMapEmbedLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7561.632916619648!2d73.83860169498206!3d18.627323429948195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7805617911d%3A0x7f6f9fbf52798ada!2sShantinagar%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1733055948658!5m2!1sen!2sin"

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
      emailjs.init(emailJsPublicKey); // Public Key

      // Configure EmailJS service
      const result = await emailjs.send(
        emailJsServiceId, 
        emailJsTemplateId,
        {
          name,
          mobile,
          email,
          message,
        }
      );

      if (result.status === 200) {
        toast.success("Email sent successfully!"); // Show a success toast
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
            <a href="tel:+918806032122" className="no-underline">
              +91 88060 32122
            </a>
          </p>
          <p className="text-gray-700 flex items-center hover:text-red-600 transition">
            <FaEnvelope className="text-red-600 mr-2" />
            <a
              href="mailto:sayali-cnc-enterprises@gmail.com"
              className="no-underline"
            >
              sayali-cnc-enterprises@gmail.com
            </a>
          </p>
          <p className="text-gray-700 flex items-center hover:text-red-600 transition">
            <FaMapMarkerAlt className="text-red-600 mr-2" />
            <a
              href={GMapLocationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              Shantinagar, Bhosari, Pimpri-Chinchwad, Maharashtra
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
              src={GMapEmbedLink}
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
