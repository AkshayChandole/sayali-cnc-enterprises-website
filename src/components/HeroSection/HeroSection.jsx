const HeroSection = () => (
    <section
      id="home"
      className="relative text-red p-8 text-center flex flex-col items-center justify-center min-h-screen"
    >
      {/* Black and white transparent background image with grayscale filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tagteammfg.com/wp-content/uploads/2019/08/Fotolia_254605585_Subscription_Monthly_M.jpg')",
          filter: "grayscale(100%)", // Apply grayscale filter to make it black & white
          opacity: 0.4, // Add transparency for darkened effect
        }}
      ></div>
  
      {/* Text section */}
      <div className="relative z-10 text-center">
        {/* Heading with a bold and vibrant color */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-red-700 text-shadow-2xl animate__animated animate__fadeIn animate__delay-1s">
          SAYALI CNC Enterprises
        </h1>
  
        {/* Subheading with a brighter and contrasting color */}
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-maroon-800 text-shadow-md animate__animated animate__fadeIn animate__delay-1.5s">
          Your trusted partner in precision machining and manufacturing.
        </p>
  
        {/* Call-to-action button */}
        <div className="mt-6">
          <a
            href="#contact"
            className="bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-xl transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
  
  export default HeroSection;
  