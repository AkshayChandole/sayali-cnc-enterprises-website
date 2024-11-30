const ContactSection = () => {

    const submitHandler = (e) => {
        e.preventDefault(); // Prevents the form from reloading the page
        window.alert("Submitted");
    }

    return(
    <section id="contact" className="bg-gray-50 p-8 md:p-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-8">
            Get in touch with us for any inquiries or quotes.
        </p>
        <form onSubmit={submitHandler} className="space-y-6 max-w-4xl mx-auto">
            {/* Name Input */}
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    placeholder="Enter your name"
                />
            </div>

            {/* Email Input */}
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    placeholder="Enter your email"
                />
            </div>

            {/* Message Textarea */}
            <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                    rows="6"
                    placeholder="Write your message here"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full p-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
            >
                Submit
            </button>
        </form>
    </section>
)};
export default ContactSection;
