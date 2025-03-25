import React from 'react';
import './footer.css';
import { Link } from "react-router-dom"; 
import logo from '../footer/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <img src={logo} alt="Enstacked Logo" className="logo" />
          <p>
            Enstacked is a team of dedicated and highly-rated experts, carefully selected to deliver outstanding software solutions, enabling businesses to flourish in the modern digital environment.
          </p>
          <div className="social-links">
            <h3>Follow Us:</h3>
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/analytics-career-connect/about/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>

          </div>
        </div>

        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </div>

        <div className="footer-section privacy-policy">
          <h3>Privacy & Policy</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>India HQ</h3>
          <p>
            Pune , Maharashtra
          </p>
          
          <div className="get-in-touch">
            <h3>Get in Touch</h3>
            <p>9607157409</p>
            <p>analyticscareerconnect.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
