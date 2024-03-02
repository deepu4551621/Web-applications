import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <h3>Categories</h3>
        <ul>
          <li><a href="#">Web Builder</a></li>
          <li><a href="#">Hosting</a></li>
          <li><a href="#">Data Center</a></li>
          <li><a href="#">Robotic-Automation</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>Contact</h3>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div className="section">
        <h3>United States <IoIosArrowDown size={16} /></h3>
      </div>
    </footer>
  );
};

export default Footer;
