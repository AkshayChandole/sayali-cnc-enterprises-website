const ServicesSection = () => (
    <section id="services" className="bg-gray-100 p-8">
      <h2 className="text-4xl font-extrabold text-center  text-red-700 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* CNC Milling Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-center text-red-700 mb-4">CNC Milling</h3>
          <p className="text-lg text-gray-700 text-center mb-4">
            High-precision CNC milling services for various industries.
          </p>
          <img
            src="https://th.bing.com/th/id/R.aeb2b14cfd1226dcc985cc7009940f37?rik=ogM2A1DdkExKjQ&riu=http%3a%2f%2fcanwilleng.co.za%2fwp-content%2fuploads%2f2017%2f11%2fmilling.jpg&ehk=XSqsu%2foz%2biboj9nAudFo9Txy3M0VRU294uGrQynUeQk%3d&risl=&pid=ImgRaw&r=0"
            alt="A close-up image of a CNC milling machine in operation"
            className="mx-auto w-full h-48 object-cover rounded-md"
          />
        </div>
  
        {/* CNC Turning Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-center text-red-700 mb-4">CNC Turning</h3>
          <p className="text-lg text-gray-700 text-center mb-4">
            Expert CNC turning services for complex components.
          </p>
          <img
            src="https://www.brabow.co.uk/brabowWP/wp-content/uploads/2020/12/AdobeStock_207646053-1-scaled.jpeg"
            alt="A detailed image of a CNC turning machine in action"
            className="mx-auto w-full h-48 object-cover rounded-md"
          />
        </div>
  
        {/* Prototyping Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-center text-red-700 mb-4">Prototyping</h3>
          <p className="text-lg text-gray-700 text-center mb-4">
            Rapid prototyping services to bring your ideas to life.
          </p>
          <img
            src="https://v4-upload.goalsites.com/727/image_1636682873_Rapid-Prototyping-Machining.jpg"
            alt="An image showing a prototype being created using CNC machinery"
            className="mx-auto w-full h-48 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
  
  export default ServicesSection;
  