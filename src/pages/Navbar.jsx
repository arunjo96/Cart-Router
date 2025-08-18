import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1976d2] py-1.5 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      
        <h3 className="text-white text-xl font-semibold">JoCart</h3>

    
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-white text-blue-600 px-3 py-1 text-sm rounded-full hover:bg-gray-100 transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="bg-white text-blue-600 px-3 py-1 text-sm rounded-full hover:bg-gray-100 transition flex items-center gap-1"
          >
            Cart <span>({cartCount})</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
