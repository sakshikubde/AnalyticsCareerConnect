import React, { useRef, useEffect } from 'react';
import './services.css';
import { Link } from "react-router-dom"; 
import serviceImage1 from './bg.png';
import serviceImage2 from './one.jpeg';
import serviceImage3 from './two.jpeg';
import data from './data-analytics.jpeg';
import web from './webdevelopment.jpeg';
import digit from './digital watermarkinh.jpeg';
import talent from './talent.jpeg';

const Services = () => {
  const sliderRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const dots = dotsRef.current.querySelectorAll('.dot');

    const updateDots = () => {
      const scrollPosition = slider.scrollTop;
      const cardHeight = slider.offsetHeight;
      const activeIndex = Math.round(scrollPosition / cardHeight);

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });
    };

    const handleDotClick = (index) => {
      const cardHeight = slider.offsetHeight;
      slider.scrollTo({
        top: index * cardHeight,
        behavior: 'smooth'
      });
    };

    slider.addEventListener('scroll', updateDots);
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => handleDotClick(index));
    });

    return () => {
      slider.removeEventListener('scroll', updateDots);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => handleDotClick(index));
      });
    };
  }, []);

  return (
    <div className="services-container">
      {/* Hero Section */}
      <div className="hero-section1">
        <div className="hero-content1">
          <h1>Empowering Businesses with Data, Technology & Talent Solutions</h1>
          <p className="hero-subtitle1">
            🚀 In today's fast-paced digital world, we provide comprehensive solutions that help businesses thrive.
          </p>
        </div>
        <div className="hero-image1">
          <img src={serviceImage1} alt="Business Solutions" />
        </div>
      </div>

      {/* Services Cards Section */}

      <h2 style={{fontSize: "2.2rem", color: "#2d2d2e", marginBottom:"1.5rem", lineHeight: "1.2" , fontWeight: "700", textAlign:"center"}}>Our Services</h2>
      <div className="services-slider-container">
        <div className="services-cards" ref={sliderRef}>
          <div className="service-card">
            <div className="card-image">
              <img src={data} alt="Data Analytics" />
            </div>
            <div className="card-content">
              <h3>📊 Data Analytics Services – Unlock the Power of Your Data</h3>
              <p>Data is the key to business success, but only when used effectively. Our data analytics solutions help businesses transform raw data into actionable insights, driving growth and efficiency.</p>
              <p>Our Data Analytics Services Include:</p>
              <ul className="service-list">
                <li>✔ Data Strategy & BI Solutions – Develop a strong data strategy and create interactive dashboards using Power BI & Tableau for real-time insights.</li>
                <li>✔ Predictive Analytics & AI – Leverage AI-driven insights and machine learning models to forecast trends and optimize business strategies.</li>
                <li>✔ Data Cleaning & ETL – Ensure data accuracy and consistency through proper cleaning, transformation, and loading processes.</li>
                <li>✔ Custom Analytics Solutions – Develop tailored analytics solutions to address your specific business challenges and goals.</li>
              </ul>
              <p className="service-cta">👉 Let's Drive Business Growth with Data!</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image">
              <img src={web} alt="Web Development" />
            </div>
            <div className="card-content">
              <h3>🌐 Web Development Services – Build Your Digital Presence</h3>
              <p>Your website is your digital storefront. We partner with expert developers to create modern, responsive websites that drive results and enhance your online presence.</p>
              <p>Our Web Development Services Include:</p>
              <ul className="service-list">
                <li>✔ Custom Website Development – Get a website that's tailored to your business needs.</li>
                <li>✔ E-commerce & WordPress Solutions – Launch an online store with optimized performance.</li>
                <li>✔ UI/UX Design & Optimization – Create visually appealing, user-friendly interfaces for a seamless experience.</li>
                <li>✔ Web App Development – Build robust, scalable applications to enhance business operations.</li>
                <li>✔ Website Performance & SEO Optimization – Improve website speed, security, and search engine rankings.</li>
              </ul>
              <p className="service-cta">👉 Launch Your Website with Us!</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image">
              <img src={digit} alt="Digital Marketing" />
            </div>
            <div className="card-content">
              <h3>📢 Digital Marketing Services – Grow Your Online Presence</h3>
              <p>In today's digital landscape, effective marketing is key to business growth. Our comprehensive digital marketing solutions help you reach, engage, and convert your target audience.</p>
              <p>Our Digital Marketing Services Include:</p>
              <ul className="service-list">
                <li>✔ SEO & Content Marketing – Improve search rankings and attract organic traffic.</li>
                <li>✔ Social Media Management – Engage and grow your audience on LinkedIn, Instagram, and other platforms.</li>
                <li>✔ Paid Advertising (PPC & Performance Marketing) – Get targeted ad campaigns that convert.</li>
                <li>✔ Email Marketing & Lead Generation – Build relationships and drive sales through personalized email strategies.</li>
                <li>✔ Brand Strategy & Growth Consulting – Develop a data-driven marketing plan tailored to your goals.</li>
              </ul>
              <p className="service-cta">👉 Scale Your Business with Digital Marketing!</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image">
              <img src={talent} alt="Talent Acquisition" />
            </div>
            <div className="card-content">
              <h3>🎯 Talent Acquisition Services – Find Top Tech & Data Talent</h3>
              <p>Finding the right talent is crucial for your business success. We specialize in connecting companies with skilled professionals in technology, data, and digital domains.</p>
              <p>Our Talent Acquisition Services Include:</p>
              <ul className="service-list">
                <li>✔ Tech & Data Hiring – Specializing in hiring Data Analysts, Data Scientists, AI Engineers, Web Developers, and more.</li>
                <li>✔ Full-Time & Contract-Based Hiring – Flexible recruitment solutions tailored to your needs.</li>
                <li>✔ Pre-Vetted Candidate Pool – Access a high-quality talent network to fill positions faster.</li>
                <li>✔ End-to-End Hiring Support – From sourcing and screening to onboarding, we handle it all.</li>
              </ul>
              <p className="service-cta">👉 Find Your Next Hire Today!</p>
            </div>
          </div>
        </div>
        <div className="slider-nav">
          <div className="slider-dots" ref={dotsRef}>
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="learning-section">
        <div className="learning-content">
          <h2>Why Choose Us?</h2>
          <div className="features-list">
            <div className="feature12">
              <span className="check-icon">✅</span>
              <p>Industry Experts & Trusted Partners – Our team and partners bring deep expertise in data, technology, and recruitment.</p>
            </div>
            <div className="feature12">
              <span className="check-icon">✅</span>
              <p>Customized & Scalable Solutions – Every business is different, and we tailor our services to fit your needs.</p>
            </div>
            <div className="feature12">
              <span className="check-icon">✅</span>
              <p>Affordable & Value-Driven – Get high-quality services at cost-effective rates, ensuring maximum ROI.</p>
            </div>
            <div className="feature12">
              <span className="check-icon">✅</span>
              <p>Tech-Enabled & Data-Driven – We use the latest technologies and data insights to drive better results.</p>
            </div>
            <div className="feature12">
              <span className="check-icon">✅</span>
              <p>End-to-End Support – From strategy to execution, we provide complete support to help you achieve success.</p>
            </div>
          </div>
        </div>
        <div className="learning-images">
          <div className="image-grid">
            <div className="circle1"></div>
            <img src={serviceImage2} alt="Students Learning" className="learning-image" />
            <img src={serviceImage3} alt="Professional Development" className="learning-image" />
          </div>
        </div>
      </div>

      <div className="give-section">
      {/* Heading */}
      <h2 className="give-heading">Let’s Build Something Great Together!</h2>

      {/* Description */}
      <p className="give-description">
        We are committed to helping businesses grow with data-driven solutions,
        advanced technology, and top-tier talent acquisition. Whether you're
        looking for analytics expertise, a website, digital marketing
        strategies, or the right team members, we are here to help.
      </p>

      {/* Contact Section */}
      <div className="give-contact">
       <Link to= "/contact"> 📩 Contact Us Today </Link>| 🌍 <a href="analyticscareerconnect.com">analyticscareerconnect.com</a> | 📢{" "}
        <a href="https://www.linkedin.com/company/analytics-career-connect/about/">Follow Us on LinkedIn</a>
      </div>
    </div>

    </div>
  );
};

export default Services;
