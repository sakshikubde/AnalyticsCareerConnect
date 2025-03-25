import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./navbar.css";
import logo from "../../assets/logo1.jpg";
import toggle_dark from "../../assets/sun.jpg";
import toggle_light from "../../assets/night.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ theme, setTheme }) => {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logona" />
      </div>
      <div className={`nav-center ${mobileMenu ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            Program
            <span className="dropdown-arrow">▼</span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/mentorship">Mentorship Program</Link>  {/* Link to Membership Component */}
                </li>
                <li><Link to="/internship">Internship Program</Link></li>
                <li><Link to="/job"> Job Assurance</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/about1">About</Link></li>
          <li><Link to = "/contact">Contact</Link></li>
          <li><Link to = "/services"> Services</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="btn">Enroll Now</button>
        <div className="hamburger" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
