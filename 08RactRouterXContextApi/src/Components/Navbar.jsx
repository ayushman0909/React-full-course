import React from 'react'

import {NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md h-20 bg-amber-400">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className={  "text-2xl font-bold text-blue-600"}
        >
          MyApp
        </NavLink>

        {/* Navigation NavLinks */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({isActive})=>isActive ? "text-blue-700 font-medium transition": "text-gray-700  hover:text-blue-600 font-medium transition"}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({isActive})=>isActive ? "text-blue-700 font-medium transition": "text-gray-700  hover:text-blue-600 font-medium transition"}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({isActive})=>isActive ? "text-blue-700 font-medium transition": "text-gray-700  hover:text-blue-600 font-medium transition"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  
