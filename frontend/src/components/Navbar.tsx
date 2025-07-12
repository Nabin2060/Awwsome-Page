import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center pt-8 px-12 font-poppins w-full bg-white shadow-none relative">
      <div className="text-2xl font-bold tracking-tight flex-1 drop-shadow">
        <span className="text-[#5B5BF6]">Awww</span>
        <span className="text-[#222]">some</span>
        <span className="text-[#5B5BF6]">.</span>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex gap-12 list-none m-0 p-0 text-base font-semibold">
          <li className="text-[#5B5BF6] cursor-pointer drop-shadow">Home</li>
          <li className="text-gray-500 hover:text-[#5B5BF6] cursor-pointer drop-shadow">
            About us
          </li>
          <li className="text-gray-500 hover:text-[#5B5BF6] cursor-pointer drop-shadow">
            Services
          </li>
          <li className="text-gray-500 hover:text-[#5B5BF6] cursor-pointer drop-shadow">
            News
          </li>
        </ul>
        <button className="bg-[#5B5BF6] text-white rounded-lg px-8 py-3 font-bold shadow-md hover:bg-[#6C63FF] transition">
          Contact
        </button>
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden ml-auto focus:outline-none"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-all">
          {/* Close Icon */}
          <button
            className="absolute top-8 right-8 text-2xl text-gray-500 hover:text-[#5B5BF6] focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-8 mt-12 mb-8 text-center w-full">
            <li className="text-[#5B5BF6] font-semibold text-lg">Home</li>
            <li className="text-gray-500 hover:text-[#5B5BF6] font-semibold text-lg">
              About us
            </li>
            <li className="text-gray-500 hover:text-[#5B5BF6] font-semibold text-lg">
              Services
            </li>
            <li className="text-gray-500 hover:text-[#5B5BF6] font-semibold text-lg">
              News
            </li>
          </ul>
          <button className="bg-[#5B5BF6] text-white rounded-lg px-8 py-3 font-bold shadow-md hover:bg-[#6C63FF] transition mt-2">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
