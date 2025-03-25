import React from 'react'
import { FaFileAlt, FaPhoneAlt, FaTasks, FaHandshake } from "react-icons/fa";
import { FaExclamationTriangle, FaEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import bg from './bg.png';


import './career.css'

const benefits = [
    { emoji: '💡', title: 'Impact-Driven Work', description: 'Help solve unemployment & improve education' },
    { emoji: '📈', title: 'Fast-Growing Startup', description: 'Be part of an innovative team' },
    { emoji: '🌎', title: 'Remote & Hybrid Opportunities', description: 'Work from anywhere' },
    { emoji: '🎯', title: 'Career Growth', description: 'Upskill with industry experts' },
    { emoji: '💰', title: 'Competitive Salaries', description: 'Fair compensation based on skills & experience' },
    { emoji: '🤝', title: 'Collaborative Culture', description: 'Work with passionate professionals' },
  ];


  const positions = [
    {
      title: 'WordPress Developer Intern',
      responsibilities: [
        'Design, develop, and maintain WordPress websites',
        'Optimize website performance & ensure mobile responsiveness',
        'Integrate plugins and custom features',
      ],
      requirements: [
        'Basic knowledge of WordPress development',
        'Familiarity with HTML, CSS, JavaScript',
        'Creative mindset with attention to detail',
      ],
    },
    {
      title: 'Data Analyst Intern',
      responsibilities: [
        'Analyze datasets to uncover actionable insights',
        'Create dashboards using Excel, Power BI, or Tableau',
        'Assist in report preparation',
      ],
      requirements: [
        'Strong analytical skills & attention to detail',
        'Proficiency in Excel and at least one data visualization tool',
        'Basic SQL knowledge is a plus',
      ],
    },
    {
      title: 'Product Analyst Intern',
      responsibilities: [
        'Research and analyze user needs to improve products',
        'Support product lifecycle from ideation to deployment',
        'Track and report performance metrics',
      ],
      requirements: [
        'Interest in product development & market research',
        'Strong problem-solving and analytical skills',
        'Basic knowledge of Agile methodologies is a plus',
      ],
    },
    {
      title: 'Graphic Designer Intern',
      responsibilities: [
        'Design marketing materials, social media posts & presentations',
        'Collaborate on visually appealing graphics',
        'Ensure brand consistency',
      ],
      requirements: [
        'Proficiency in Adobe Illustrator, Photoshop, or Canva',
        'Strong creative & visual design skills',
        'A portfolio showcasing your work',
      ],
    },
    {
      title: 'Human Resource Intern',
      responsibilities: [
        'Assist in recruitment, onboarding & employee engagement',
        'Maintain & update employee records',
        'Support HR operations',
      ],
      requirements: [
        'Interest in HR & people management',
        'Strong communication & organizational skills',
        'Knowledge of MS Office tools is a plus',
      ],
    },
    {
      title: 'Founding Team Roles',
      responsibilities: [
        'Work closely with the CEO on core business strategies',
        'Contribute to decision-making & operations',
        'Support key projects across various domains',
      ],
      requirements: [
        'Entrepreneurial mindset & ownership attitude',
        'Strong problem-solving & multitasking skills',
        'Excellent communication & leadership potential',
      ],
    },
    {
      title: 'General Internship Opportunities',
      responsibilities: [
        'Work on diverse projects based on your interests & skills',
        'Get exposure to real-world challenges',
        'Learn from industry professionals',
      ],
      requirements: [
        'Passion for learning & career growth',
        'Basic knowledge of your chosen domain',
        'Enthusiasm to contribute to a team',
      ],
    },
  ];


  const steps = [
    {
      icon: <FaFileAlt className="icon" />, 
      title: "Application Review",
      description: "Our team evaluates your experience."
    },
    {
      icon: <FaPhoneAlt className="icon" />, 
      title: "Screening Call",
      description: "Discuss skills & career goals."
    },
    {
      icon: <FaTasks className="icon" />, 
      title: "Assessment (If Needed)",
      description: "Short test or assignment."
    },
    {
      icon: <FaHandshake className="icon" />, 
      title: "Final Interview & Offer",
      description: "Discussion with leadership."
    }
  ];

const Career = () => {
  return (
    <div>
         <div className="careers-container">
      {/* Heading */}
      <h1 className="careers-heading">Careers at Analytics Career Connect</h1>

      {/* Subheading */}
      <p className="careers-subheading">
        At Analytics Career Connect, we bridge the gap between learning and 
        employment. Be part of a team that values growth, creativity, and 
        innovation while working on real-world projects.
      </p>

      {/* Image */}
      <img 
        src={bg} 
        alt="Career Image" 
        className="careers-image"
      />

      {/* Button */}
      <button className="careers-button">Explore More</button>
    </div>


{/* Why work with  us  */} 
    <div className="why-work-with-us">
      <h2 className='why-heading' style={{margin:"3rem"}}>Why Work With Us?</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="emoji">{benefit.emoji}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>

{/* Open Positions at Analytics Career Connect */}
<div className="card-slider-container">
      <h2 className='position-h2'>Open Positions at Analytics Career Connect</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="custom-swiper"
      >
        {positions.map((position, index) => (
          <SwiperSlide key={index}>
            <div className="position-card">
              <h3 className='position-h3'>📌 {position.title}</h3>
              <div className="details">
                <strong className='position-strong'>🔹 Role & Responsibilities:</strong>
                <ul>
                  {position.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <strong className='position-strong'>🔹 Requirements:</strong>
                <ul>
                  {position.requirements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <a href="#" className="apply-link">👉 Apply Here</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>




    {/* Our process */}


    <div className="hiring-process">
      <h2 className="heading">📍 Our Hiring Process</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="icon-container">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="apply-button">👉 Start Your Application</button>
      </div>
    </div>

{/* IMportant */}
    <div className="important-note">
      <div className="imp-icon-container">
        <FaExclamationTriangle className="imp-warning-icon" />
      </div>
      <h2 className="imp-heading">🚨 Important Note:</h2>
      <p className="imp-message">
        Beware of fake job scams! <strong>Analytics Career Connect</strong> NEVER asks for money in exchange for job offers.
      </p>
      <p className="imp-contact-info">
        📢 If you’d like to apply, email us at
        <a href="mailto:careers@analyticscareerconnect.com" className="imp-email-link">
          <FaEnvelope className="imp-email-icon" /> careers@analyticscareerconnect.com
        </a>
        or visit the <a href="/careers" className="imp-careers-link">Careers</a> page for details.
      </p>
    </div>
 

    </div>
  )
}

export default Career
