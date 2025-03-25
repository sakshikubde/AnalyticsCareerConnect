import React from 'react'
import './internship.css'

import HealthcareImg from "../Internship/healthcare-removebg-preview.png";
import EcommerceImg from "../Internship/ecomerce-removebg-preview.png";
import RetailImg from "../Internship/Retail-removebg-preview.png";
import MarketingImg from "../Internship/Market-removebg-preview.png";
import RealEstateImg from "../Internship/realestate-removebg-preview.png";
import FinanceImg from "../Internship/Finance-removebg-preview.png";

const industries = [
    { name: "Healthcare", image: HealthcareImg },
    { name: "E-commerce", image: EcommerceImg },
    { name: "Retail", image: RetailImg},
    { name: "Marketing", image: MarketingImg },
    { name: "Real Estate", image: RealEstateImg },
    { name: "Finance", image: FinanceImg },
  ];
  


const Internship = () => {

  const highlightsData = [
    {
      title: "Foundational Tools",
      description:
        "Training in Excel, SQL, Power BI, and Python to tackle industry problems.",
    },
    {
      title: "Project-Based Learning",
      description:
        "Solve beginner to advanced-level projects using real datasets.",
    },
    {
      title: "Industry Exposure",
      description:
        "Work on challenges relevant to today’s job market.",
    },
    {
      title: "Mentorship",
      description:
        "Get personalized guidance and feedback from experienced mentors.",
    },
    {
      title: "Career Prep",
      description:
        "Build study resources and a portfolio to showcase your expertise to employers.",
    },
  ];

      const internshipsData = [
        {
          title: "Companies",
          description:
            "Access remote, pre-vetted interns to drive growth and strengthen your future talent pipeline.",
        },
        {
          title: "Educators",
          description:
            "Seamlessly embed internships into your curriculum, enhancing student employability and practical skills.",
        },
        {
          title: "Interns",
          description:
            "Launch your career with global experience, valuable skills, and professional connections.",
        },
      ];


  return (
    <div>
       <div className="mentor-section">
      <div className="content">
        <h1>kickStart Your First Step Towards Your Career Today</h1>
        {/* <p>Connect With Expert Mentors Who Will Guide You Through Your Career Journey</p> */}
        <button className="join-button">Join Now</button>
      </div>
      </div>

      {/* Highlights */}
    <div className="highlights-container">
      <h2 className="highlights-heading">Highlights</h2>
      <div className="highlights-grid">
        {highlightsData.map((item, index) => (
          <div key={index} className="highlight-card">
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>



{/* What We'll Give */}
   
    <div className="give-section">
      {/* Heading */}
      <h2 className="give-heading">What We'll Give</h2>

      {/* Description */}
      <p className="give-description">
        In our Internship Program, you’ll dive into real-world projects across multiple industries, 
        gaining practical experience and job-ready skills. Over the course of 3 to 6 months, you’ll not only 
        develop technical expertise but also build a strong portfolio with mentorship, helping you bridge the gap 
        between learning and actual work. By the end of the program, you’ll be fully prepared to enter the workforce 
        with the skills employers are looking for.
      </p>

      {/* Industry List */}
      <div className="industries-container">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            <img src={industry.image} alt={industry.name} className="industry-icon" />
            <p className="industry-name">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>

{/* InternshipData */}

    <div className="internships-container">
      <h2 className="internships-title">Internships</h2>
      <p className="internships-description">
        Connecting educators, companies, and interns to create lasting, meaningful impact.
      </p>

      <div className="internships-grid">
        {internshipsData.map((item, index) => (
          <div key={index} className="internship-card">
            <h3 className="internship-title">{item.title}</h3>
            <p className="internship-text">{item.description}</p>
          </div>
        ))}
      </div>
    </div>



    </div>
  )
}

export default Internship
