import React from 'react'
import './contact.css'
import backgroundImage from '../contact/contact.jpg';

const Contactex = () => {
      return (
        <div className="first1">
    <div className=" cont" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="form-container">
        <h2>Contact Us</h2>
        <p>Go from data to insights in minutes</p>
        <form>
          <div className="form-group">
            <label>First:</label>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="form-group">
            <label>Last:</label>
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Comment or Message:</label>
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" style={{borderRadius: "2rem",padding: "1rem 4rem"}}>Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

 
export default Contactex
