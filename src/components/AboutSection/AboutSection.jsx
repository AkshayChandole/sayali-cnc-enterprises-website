const AboutSection = () => (
    <section
      id="about"
      className="min-h-screen bg-white p-8 flex flex-col items-center justify-center text-center md:text-left"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Text content on the left */}
        <div className="md:w-2/3 lg:w-1/2 text-gray-700">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-4">
            Precision Machining. Unmatched Excellence.
          </h2>
          <br />
          <p className="text-lg sm:text-xl mb-6">
            Welcome to <b className="text-red-700 font-bold ">SAYALI CNC Enterprises, Chakan, Pune </b> founded by{" "}
            <a
              href="https://www.linkedin.com/in/sanket-papat-9b93a6323/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 font-bold hover:underline"
            >
              Sanket Papat
            </a>
            , where precision and quality meet. We specialize in CNC machining solutions for industries like aerospace, automotive, and medical devices.
          </p>
          <p className="text-lg sm:text-xl mb-6">
            With state-of-the-art CNC equipment, we ensure exceptional accuracy and fast turnaround times for all your manufacturing needs.
          </p>
          <p className="text-lg sm:text-xl mb-6">
            Whether you need prototypes or production runs, we deliver tailored solutions that meet your specifications.
          </p>
  
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mt-8 mb-4">
            Why Choose Us?
          </h3>
  
          {/* Updated list for mobile and desktop */}
          <ul className="text-lg sm:text-xl list-disc pl-6 mb-8 space-y-3">
            <li>Precision & quality with advanced CNC technology.</li>
            <li>Serving aerospace, automotive, medical, and more.</li>
            <li>Fast and reliable turnaround times.</li>
            <li>Custom solutions for every project.</li>
          </ul>
  
          <p className="text-lg sm:text-xl">
            Partner with us to bring your ideas to life with precision and expertise.
          </p>
        </div>
  
        {/* Image content on the right */}
        <div className="md:w-1/3 lg:w-2/3 mt-8 md:mt-0">
          <img
            src="https://unizonmachinery.com/img/yuklenen/buyuk-precision-machining-with-cad-cam-1423.jpg"
            alt="SAYALI CNC Enterprises' facility"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
  
  export default AboutSection;
  