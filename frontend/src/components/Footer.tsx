import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#282736] text-white pt-12">
      <div className="container mx-auto px-6 md:px-24 pb-8 grid grid-cols-2 gap-y-8 md:flex md:flex-row md:items-start md:justify-between">
        {/* Left: Logo and description */}
        <div className="col-span-2 mb-8 md:mb-0 md:w-1/3 md:pr-16">
          <div className="text-3xl font-extrabold mb-3 text-left">
            Awwwsome.
          </div>
          <p className="text-gray-300 text-base leading-relaxed max-w-lg text-left">
            Our team can create amazing web experiences, beginning with deep
            market research, practical strategies, and professional execution.
          </p>
        </div>
        {/* Columns */}
        <div className="col-span-2 grid grid-cols-2 gap-y-8 md:flex md:w-2/3 md:flex-row md:gap-x-12  md:pl-16">
          <div className=" md:pl-96">
            <div className="font-bold mb-2 text-left">ABOUT US</div>
            <ul className="space-y-1 text-gray-300 text-left">
              <li>Works</li>
              <li>Strategy</li>
              <li>Releases</li>
              <li>Press</li>
              <li>Mission</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-left">CUSTOMERS</div>
            <ul className="space-y-1 text-gray-300 text-left">
              <li>Trending</li>
              <li>Popular</li>
              <li>Customers</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2 text-left">SUPPORT</div>
            <ul className="space-y-1 text-gray-300 text-left">
              <li>Developers</li>
              <li>Support</li>
              <li>Customer Service</li>
              <li>Guide</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#23222b] text-center py-3 text-gray-300 text-sm mt-8">
        2022 ©. Awwwsome Designers
      </div>
    </footer>
  );
};

export default Footer;
