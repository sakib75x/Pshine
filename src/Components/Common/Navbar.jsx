import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="w-full bg-slate-50/50 backdrop-blur-sm border-t border-slate-200/40 py-3.5 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <nav className="flex items-center gap-8">
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            to="/products"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            to="/categories"
          >
            Categories
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
