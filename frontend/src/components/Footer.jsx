import React from 'react';
import { FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#029193] text-black py-12 px-4 shadow-inner relative overflow-hidden font-['BIANKA']">
      
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-300/10 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold mb-4">
            ViCode
          </h1>
          <p className="text-sm">
            Visualizing Code, Virtually Innovating. 
            Empowering developers with industry-ready skills and real-world projects.
          </p>

          <div className="flex space-x-6 mt-6">
            <FaInstagram className="text-3xl hover:text-black cursor-pointer transition transform hover:scale-110" />
            <FaTwitterSquare className="text-3xl hover:text-black cursor-pointer transition transform hover:scale-110" />
            <FaGithubSquare className="text-3xl hover:text-black cursor-pointer transition transform hover:scale-110" />
            <FaDribbbleSquare className="text-3xl hover:text-black cursor-pointer transition transform hover:scale-110" />
            <FaFacebookSquare className="text-3xl hover:text-black cursor-pointer transition transform hover:scale-110" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1 */}
          <div>
            <h6 className="text-lg font-semibold">Resources</h6>
            <ul>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Tutorials</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Code Snippets</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Open Source</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Documentation</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="text-lg font-semibold">Courses</h6>
            <ul>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Full-Stack Development</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Data Structures & Algorithms</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Machine Learning</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Blockchain</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="text-lg font-semibold">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">About Us</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Careers</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Partners</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h6 className="text-lg font-semibold">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Help Center</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">FAQs</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Community Forum</li>
              <li className="py-2 text-sm hover:text-gray-700 transition cursor-pointer">Report an Issue</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-sm relative z-10">
        © {new Date().getFullYear()} ViCode. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
