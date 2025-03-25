import React from 'react'
import './job.css'
import backgroundImage from '../job/bg.jpg'
import image_left from '../job/about.jpg'



const Job = () => {

  const benefits = [
    {
      title: "Job Search Strategy",
      description: "Learn effective techniques for applying to jobs and getting noticed."
    },
    {
      title: "Resume Reviews & LinkedIn Optimization",
      description: "Tailor your profile to stand out."
    },
    {
      title: "Networking Guidance",
      description: "Build meaningful connections to expand your opportunities."
    },
    {
      title: "Mock Interviews",
      description: "Sharpen your interview skills with expert-led sessions."
    },
    {
      title: "Job Leads & Referrals",
      description: "Gain access to exclusive job opportunities and referrals."
    }
  ];

  return (
    <div>
    <div className="job-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="job-overlay">
        <div className="job-content" style={{margin: "1rem 4rem"}}>
          {/* Header Section */}
          <h1 className="job-title">🚀 Job Assistance Program – Your Path to Career Success!</h1>
          <p className="job-description">
          Struggling to land a job despite having the right skills? Our Job Assistance Program is designed to help you break into the industry with personalized guidance, strategic job application support, and exclusive hiring opportunities. We focus on resume building, LinkedIn optimization, interview preparation, and job referrals to ensure you get the job you deserve.
          </p>

          {/* Call to Action Button */}
          <button className="job-button">👉 Join the Program</button>
        </div>

        {/* Cards Section */}
        <div className="job-cards">
          {/* Card 1 */}
          <div className="job-card">
            <img src="https://img.icons8.com/ios/100/ffffff/resume.png" alt="Resume Icon" />
            <h3>Resume Reviews & LinkedIn Optimization</h3>
            <p>Tailor your profile to stand out.</p>
          </div>

          {/* Card 2 */}
          <div className="job-card">
            <img src="https://img.icons8.com/ios/100/ffffff/network.png" alt="Networking Icon" />
            <h3>Networking Guidance</h3>
            <p>Build meaningful connections to expand your opportunities.</p>
          </div>

          {/* Card 3 */}
          <div className="job-card">
            <img src="https://img.icons8.com/ios/100/ffffff/job.png" alt="Job Icon" />
            <h3>Job Leads & Referrals</h3>
            <p>Gain access to exclusive job opportunities and referrals.</p>
          </div>
        </div>
      </div>
    </div>
   
   {/* From Skilled to Hired */}

   <div className="give-section">
      {/* Heading */}
      <h2 className="give-heading">From Skilled to Hired: Land Your Dream Job in 45-90 Days</h2>

      {/* Description */}
      <p className="give-description">
      This program offers personalized guidance for beginners or individuals transitioning to a career in data. Over 3-4 months, mentees receive a structured learning plan, real-world projects, and career support tailored to their skill level and goals.
      </p>
    </div>

    {/* //What we Offer */}
    <div className="offer-container">
      <h2 className="offer-heading">What We Offer</h2>
      <div className="offer-content">
        {/* Left Side - Image */}
        <div className="offer-image">
          <img src={image_left} alt="Mentorship Program" />
        </div>

        {/* Right Side - Text */}
        <div className="offer-text">
          <p>
            Our Mentorship Program provides personalized guidance for individuals looking to build 
            strong skills in data analytics, data science, and business intelligence. Through one-on-one 
            mentorship, real-world projects, and career coaching, participants gain practical experience, 
            industry insights, and structured learning to confidently tackle real-world challenges and 
            succeed in the tech industry.
          </p>
        </div>
      </div>
    </div>

    {/* What you'll Receive */}
    <div className="what-youll-receive">
      <h2 style={{fontSize:"2.4rem" , fontWeight:"bold", paddingBottom:"2.1rem"}}>What You'll Receive</h2>
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
</div>

    </div>
  );
}


export default Job
