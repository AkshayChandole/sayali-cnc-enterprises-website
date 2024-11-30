const Footer = () => (
    <footer className="bg-white p-8 text-center text-gray-700">
      <div className="max-w-screen-xl mx-auto">
        {/* First Paragraph: Main Footer Content */}
        <p className="text-2xl font-semibold mb-4">
          &copy; 2024 <span className="font-bold text-red-700">SAYALI CNC Enterprises</span>. All rights reserved.
        </p>
  
        {/* Second Paragraph: Credit to Creator */}
        <p className="text-lg mb-6">
          Made with ❤️ by 
          <a 
            href="https://www.linkedin.com/in/akshaychandole/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-indigo-500 transition duration-300 ease-in-out ml-1"
          >
            Akshay Chandole
          </a>
        </p>
        
      </div>
    </footer>
  );
  
  export default Footer;
  