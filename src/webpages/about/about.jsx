import React from 'react'
import './about.css'
import { Link } from "react-router-dom"; 

import image1 from '../about/Business_Teamwork_Pack-removebg-preview.png'
import image2 from '../about/Work_Laptop_Clipart_Transparent_PNG_Hd__Illustration_Of_A_Man_Working_On_A_Laptop__Flat__Man__Laptop_PNG_Image_For_Free_Download-removebg-preview.png'
import image3 from '../about/Premium_Vector___Men_play_laptops-removebg-preview.png'
import vision_img from '../about/Team work.jpeg'

const AboutCard = ({ heading, content }) => {
  return (
    <div className="about-card">
      <h3 className="about-card-heading">{heading}</h3>
      <p className="about-card-content">{content}</p>
    </div>
  );
};

const About = () => {

//our vision
const aboutStatements = [
  {
    heading: "Tech education is democratized",
    content:
      "Accessible to all, regardless of location or financial background.",
  },
  {
    heading: "Skills matter more than degrees",
    content:
      "Focusing on hands-on experience and real-world problem-solving.",
  },
  {
    heading: "India becomes self-reliant in technology",
    content:
      "Supporting local businesses with digital transformation and fulfilling the Make in India dream.",
  },
  {
    heading: "Employment barriers are eliminated",
    content:
      "Helping individuals build careers through structured guidance, practical exposure, and industry networking.",
  },
]; 


const faqs = [
  {
    number: "1",
    question: "What is Analytics Career Connect?",
    answer:
      "A platform that bridges the skill gap in tech by offering mentorship, internships, and job assistance.",
  },
  {
    number: "2",
    question: "Who can benefit from our programs?",
    answer:
      "Students, job seekers, professionals looking to upskill, and businesses seeking skilled tech talent.",
  },
  {
    number: "3",
    question: "Is the internship program free or paid?",
    answer:
      "It’s completely free, focusing on real-world learning and practical projects.",
  },
  {
    number: "4",
    question: "Is the mentorship program paid?",
    answer:
      "Yes, it follows a pay-after-placement model—you only pay after securing a job.",
  },
  {
    number: "5",
    question: "How does job assistance work?",
    answer:
      "It includes resume reviews, interview prep, and job referrals, with payment required only after you get hired.",
  },
];

  return (
    <div>
      
      {/* // ITSolutionsSection.js */}

    <div className=" about-container">
      <div className="about-text-section">
        <h1>
          Bridging Gaps, <span className="about-highlight">Delivering IT Solutions.</span>
        </h1>
        <p>
        with mission to focuses on empowering 10 million youth in Bharat by making technical education both affordable and accessible. Leveraging technology-driven solutions, it aims to bridge the gap between education and employment by providing industry-relevant skills. The initiative targets individuals from Tier 2, 3, and 4 cities to create equal opportunities for career-building in tech. Committed to addressing India's unemployment issue, it offers job-ready skills, mentorship, and freelancing opportunities through internships and job assistance, transforming freshers and professionals into valuable industry talent.
        </p>
        <button className="about-contact-button">Contact Us</button>
      </div>
      {/* <div className="about-image-section">
        <div className="about-image-container">
          <img
            src={image1}
            alt="placeholder"
            className="about-image-large"
          />
          <img
            src={image2}
            alt="placeholder"
            className="about-image-medium"
          />
          <img
            src={image3}
            alt="placeholder"
            className="about-image-small"
          />
        </div>
      </div> */}
    </div>

  {/* Insight */}
    <div className="insight-container">
      <h2 className="insight-heading">Insight for Our Founder</h2>
      <p className="insight-description">
        "With a vision to democratize career opportunities in the tech space, I founded Analytics Career Connect to bridge the skill gap and equip individuals with the tools they need to succeed. Our mission is to empower 10 million youth of Bharat by revolutionizing technical education—making it affordable and accessible to all through technology. We believe that everyone deserves a fair chance to work in tech, regardless of their background.
        By leveraging technology, mentorship, and industry collaboration, we are putting in relentless efforts to solve India’s unemployment problem and create real job opportunities through freelancing, mentorship, and entrepreneurship. Additionally, we are committed to helping local businesses adopt new technologies to enhance efficiency, drive innovation, and contribute to the ‘Make in India’ dream—empowering businesses to thrive in the digital era."
        <br/><br/>
        <strong >— Wasim Patwari, Founder & CEO</strong>
      </p>
    </div>

    {/* Our Vision  */}


    <div className="vision-container">
      <div className="image-section">
        <img
          src={vision_img}
          alt="Vision"
          className="vision-image"
        />
      </div>
      <div className="text-section">
        <h1 className="vision-heading">Our Vision</h1>
        <div className="vision-points">
          <div className="vision-point">
            <div className="circle">1</div>
            <div className="content1">
              <h2>Tech education is democratized</h2>
              <p>Accessible to all, regardless of location or financial background.</p>
            </div>
          </div>
          <div className="vision-point">
            <div className="circle">2</div>
            <div className="content1">
              <h2>Skills matter more than degrees</h2>
              <p>Focusing on hands-on experience and real-world problem-solving.</p>
            </div>
          </div>
          <div className="vision-point">
            <div className="circle">3</div>
            <div className="content1">
              <h2>India becomes self-reliant in technology</h2>
              <p>Supporting local businesses with digital transformation and fulfilling the Make in India dream.</p>
            </div>
          </div>
          <div className="vision-point">
            <div className="circle">4</div>
            <div className="content1">
              <h2>Employment barriers are eliminated</h2>
              <p>Helping individuals build careers through structured guidance, practical exposure, and industry networking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Our vision */}

    <div className="about-section">
      <h2 className="about-heading">About Us</h2>
      <p className="about-subtext">We envision a future where:</p>
      <div className="about-cards-wrapper">
        {aboutStatements.map((about, index) => (
          <AboutCard key={index} heading={about.heading} content={about.content} />
        ))}
      </div>
    </div>

{/* Join us  */}

    <section className="join-container">
      <div className="join-content">
        <h2 className="join-heading">
          Join Us & Take Your Career to the Next Level!
        </h2>
        <p className="join-description">
          We’ve already trained <span className="highlight">110+</span> students, placed{" "}
          <span className="highlight">8+</span> candidates, and partnered with{" "}
          <span className="highlight">4+</span> businesses.  
          Whether you're a student, job seeker, or business, 
          <strong> Analytics Career Connect</strong> is here to help you succeed.
        </p>
        <button className="join-button"><Link to="/career">🚀 Get Started Now</Link></button>
      </div>
    </section>

{/* Question */}


    <section className="faq-container">
      <h2 className="faq-heading">Have Questions?</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-number">{faq.number}</div>
            <div className="faq-content">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

        </div>
    );
};




    
 

export default About
