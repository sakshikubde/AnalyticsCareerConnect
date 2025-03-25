import React from 'react';
import './contact.css';
import contactImage from './bg.jpeg';
import { FaPhone, FaWhatsapp, FaEnvelope, FaStore } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPhoneAlt } from "react-icons/fa";
import * as yup from "yup";
import { useState } from 'react';

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    mobileNumber: yup.string().matches(/^\d{10}$/, "Enter a valid 10-digit number").required("Mobile Number is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    subject: yup.array().min(1, "Select at least one option"),
    message: yup.string().required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  const [action, setAction] = useState("student");

  const contentData = {
    student: {
      title: "Explore Career Programs",
      subtitle: "🚀 Internships | Mentorship | Job Assistance",
      description: "Have questions about our programs? Fill out the form below, and we'll guide you!",
      checkboxOptions: [
        { value: "internship", label: "Internship Program" },
        { value: "mentorship", label: "Mentorship Program" },
        { value: "job", label: "Job Assistance" },
        { value: "general", label: "General Inquiry" }
      ]
    },
    business: {
      title: "Explore Our Services",
      subtitle: "📊 Data Analytics | Web Development | Hiring & Talent Acquisition",
      description: "Looking for business solutions? Connect with us for strategic partnerships.",
      checkboxOptions: [
        { value: "analytics", label: "Data Analytics Solutions" },
        { value: "webdev", label: "Web Development Services" },
        { value: "hiring", label: "Hiring & Talent Acquisition" },
        { value: "general", label: "General Inquiry" }
      ]
    }
  };

  const currentContent = action === "student" ? contentData.student : contentData.business;

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Whether you're looking for career opportunities, 
          business solutions, or partnership collaborations, feel free to reach out.
        </p>
      </div>

      <img src={contactImage} alt="Contact illustration" className="bread-image" />
      
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <FaPhoneAlt className="icon" style={{color:'#55e0ed'}} />
            <h3>Phone</h3>
            <p>9607157409
            </p>
          </div>
          
          <div className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <h3>Whatsapp</h3>
            <p>9403812709
            </p>
          </div>
          
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>support@yoursite.com</p>
          </div>
          
          <div className="contact-card">
            <FaStore className="contact-icon" />
            <h3>Our Location</h3>
            <p>Pune, Maharashtra<br />QA 45065</p>
          </div>
        </div>
      </div>

      <div className='form-section'>
        <h2>Contact Form</h2>
        <div className="container">
          <div className="text">
            <h2>{currentContent.title}</h2>
            <p>{currentContent.subtitle}</p>
            <p>{currentContent.description}</p>
          </div>
          <div className="underline"></div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName")}
                />
                {errors.firstName && <span className="error">{errors.firstName.message}</span>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
                {errors.lastName && <span className="error">{errors.lastName.message}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("mobileNumber")}
                />
                {errors.mobileNumber && <span className="error">{errors.mobileNumber.message}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">Subject Line:</label>
              <div className="checkbox-options">
                {currentContent.checkboxOptions.map((option, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      value={option.value}
                      {...register("subject")}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
              {errors.subject && <span className="error">{errors.subject.message}</span>}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                {...register("message")}
              ></textarea>
              {errors.message && <span className="error">{errors.message.message}</span>}
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
          <div className="submit-container">
            <div 
              className={action === "student" ? "student" : "student gray"} 
              onClick={() => setAction("student")}
            >
              Student Program
            </div>
            <div 
              className={action === "business" ? "student" : "student gray"} 
              onClick={() => setAction("business")}
            >
              Business Inquiry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;