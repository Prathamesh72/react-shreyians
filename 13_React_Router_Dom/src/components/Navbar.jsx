import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="flex justify-between px-8 py-4 bg-cyan-600 items-center text-white">
        <h2 className="text-xl font-bold">Prathamesh</h2>
        <div className="flex gap-8">
          <Link to="/" className="text-xl font-medium">
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium">
            About
          </Link>
          <Link to="/contact" className="text-lg font-medium">
            Contact
          </Link>
          <Link to="/product" className="text-lg fomedium">
            Product
          </Link>
          <Link to="/courses" className="text-lg fomedium">
            Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
