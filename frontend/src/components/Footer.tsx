import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282736] text-white pt-12">
      <div className="container mx-auto px-24 flex flex-col md:flex-row md:justify-between md:items-start gap-12 pb-8">
        {/* Left: Logo and description */}
        <div className="md:w-1/3">
          <div className="text-2xl font-bold mb-3">Awwwsome.</div>
          <p className="text-gray-300 text-base leading-relaxed">
            Our team can create amazing web experiences, beginning with deep
            market research, practical strategies, and professional execution.
          </p>
        </div>
        {/* Columns */}
        <div className="flex flex-1 flex-col sm:flex-row gap-8 justify-end">
          <div>
            <div className="font-bold mb-2">ABOUT US</div>
            <ul className="space-y-1 text-gray-300">
              <li>Works</li>
              <li>Strategy</li>
              <li>Releases</li>
              <li>Press</li>
              <li>Mission</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">CUSTOMERS</div>
            <ul className="space-y-1 text-gray-300">
              <li>Trending</li>
              <li>Popular</li>
              <li>Customers</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">SUPPORT</div>
            <ul className="space-y-1 text-gray-300">
              <li>Developers</li>
              <li>Support</li>
              <li>Customer Service</li>
              <li>Guide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#23222b] text-center py-3 text-gray-300 text-sm">
        2022 ©. Awwwsome Designers
      </div>
    </footer>
  );
};

export default Footer;
