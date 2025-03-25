import React from 'react'
import './mentor.css'
import mentorshipImage from '../mewntorship/member.jpg'

const Membership = () => {

    const features = [  
        {
          number: "1",
          title: "An open access to the world’s best.",
          description:
            "From Design to AI, there are thousands of top experts, you can get access for free.",
          color: "#fee2e2",
        },
        {
          number: "2",
          title: "Personalized advice to accelerate your success.",
          description:
            "Book 1:1 mentorship session & get advice, insights to move faster with your work.",
          color: "#e9d5ff",
        },
        {
          number: "3",
          title: "Achieve your long term goals, easily.",
          description:
            "Connect with mentors for recurring sessions and work towards a long-term goal.",
          color: "#dbeafe",
        },
      ];

      const topics = [
        {
          icon: "📊",
          title: "Data Analytics Tools",
          description: "Excel, SQL, Python",
          bgColor: "#E0F2FE",
        },
        {
          icon: "📈",
          title: "Business Intelligence (BI) Tools",
          description: "Power BI, Tableau",
          bgColor: "#FEF9C3",
        },
        {
          icon: "📉",
          title: "Data Visualization Techniques",
          description: "Learn how to present data effectively",
          bgColor: "#EDE9FE",
        },
        {
          icon: "🏢",
          title: "Real-World Business Case Studies",
          description: "Analyze real business scenarios",
          bgColor: "#FEE2E2",
        },
        {
          icon: "🤖",
          title: "Generative AI",
          description: "Explore AI-powered content creation",
          bgColor: "#FCE7F3",
        },
        {
          icon: "📝",
          title: "Job Readiness Skills",
          description: "Interview preparation, resume optimization, and more",
          bgColor: "#DCFCE7",
        },
      ];

      const benefits = [
        {
          title: "Skill Assessment",
          description: "A personalized evaluation to identify your strengths and areas to improve."
        },
        {
          title: "Structured Curriculum",
          description: "Learn tools and concepts needed for a successful career in data."
        },
        {
          title: "Real-World Projects",
          description: "Gain hands-on experience solving industry-relevant problems."
        },
        {
          title: "Mock Interviews",
          description: "Practice interview scenarios and get feedback to boost confidence."
        },
        {
          title: "Resume Building & Career Advice",
          description: "Create a standout resume and portfolio with expert guidance."
        }
      ];

  return (
    <div>
    <div className="mentor-section">
      <div className="content">
        <h1>Reach your goals faster with expert mentors</h1>
        <p style={{textTransform:"capitalize" , fontWeight:"100"}}>Connect With Expert Mentors Who Will Guide You Through Your Career Journey</p>
        <button className="join-button">Join Now</button>
      </div>
      </div>

    <div className="unlock-container">
      <h2 className="unlock-heading" style={{fontSize:"3rem", fontWeight:"bold"}}>Unlock Your Full Potential</h2>
      <div className="unlock-grid">
        {features.map((feature, index) => (
          <div key={index} className="unlock-feature">
            <span
              className="feature-number"
              style={{ backgroundColor: feature.color }}
            >
              {feature.number}
            </span>
            <div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-container">
      <h2 className="tech-heading">Technology</h2>
      <div className="tech-grid">
        {topics.map((topic, index) => (
          <div key={index} className="tech-card" style={{ backgroundColor: topic.bgColor }}>
            <span className="tech-icon">{topic.icon}</span>
            <h3 className="tech-title">{topic.title}</h3>
            <p className="tech-description">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>

{/* //What we Offer */}
    <div className="offer-container">
      <h2 className="offer-heading">What We Offer</h2>
      <div className="offer-content">
        {/* Left Side - Image */}
        <div className="offer-image">
          <img src={mentorshipImage} alt="Mentorship Program" />
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
      <h2 style={{fontSize:"3rem", fontWeight:"bold"}}>What You'll Receive</h2>
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
};
 
export default Membership
