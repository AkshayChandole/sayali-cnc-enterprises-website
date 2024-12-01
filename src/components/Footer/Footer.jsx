const DEVELOPER_NAME = import.meta.env.VITE_DEVELOPER_NAME;
const DEVELOPER_LINKEDIN_PROFILE = import.meta.env.VITE_DEVELOPER_LINKEDIN_PROFILE;
const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME;

const Footer = () => (
    <footer className="bg-white p-8 text-center text-gray-700">
      <div className="max-w-screen-xl mx-auto">
        {/* First Paragraph: Main Footer Content */}
        <p className="text-2xl font-semibold mb-4">
          &copy; {new Date().getFullYear()} <span className="font-bold text-red-700">{COMPANY_NAME}</span>. All rights reserved.
        </p>
  
        {/* Second Paragraph: Credit to Creator */}
        <p className="text-lg mb-6">
          Made with ❤️ by 
          <a 
            href={DEVELOPER_LINKEDIN_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 hover:text-indigo-500 transition duration-300 ease-in-out ml-1"
          >
            {DEVELOPER_NAME}
          </a>
        </p>
        
      </div>
    </footer>
  );
  
  export default Footer;
  