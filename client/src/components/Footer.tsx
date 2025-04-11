const Footer = () => {
    return (
      <footer className="w-full bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-gray-900 font-semibold mb-4">Job Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Our Process</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Blog Posts</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 flex space-x-4">
                <a href="#" className="text-xs text-gray-600 hover:text-blue-600">Privacy Policy</a>
                <a href="#" className="text-xs text-gray-600 hover:text-blue-600">Terms of Service</a>
                <a href="#" className="text-xs text-gray-600 hover:text-blue-600">Cookie Settings</a>
              </div>
              <p className="text-xs text-gray-600">© 2025 SkillScan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
  