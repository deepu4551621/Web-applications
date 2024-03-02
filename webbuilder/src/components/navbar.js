import React from 'react';
import { CiSearch } from "react-icons/ci" // Importing search icon from react-icons library

function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-bar">
      <CiSearch className="search-icon" size={30} color='grey'/>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="navbar-links">
        <a href="#">Categories</a>
        <a href="#">Web Builders</a>
        <a href="#">Today's Deals</a>
      </div>
    </nav>
  );
}

export default Navbar;
