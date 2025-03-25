import React from 'react'
import './whoarewe.css'
// import group_photo from '../../assets/GroupPhoto.jpeg'

const Description = () => {
  /*return (
    <div className='DesContainer'>
     <div className='title1'>
        <p>Who We Are</p>
        <h2>Build Your Career with Our Tailored Programs</h2>
     </div>
     <div className='title2'>
        <p>Mentorship Program</p>
        <h2>Learn data analytics, SQL, Python, and more with expert guidance tailored to your career goals.</h2>
        <button>Read More</button>
     </div>

     <div className='title3'>
        <p>Job Assistance Program</p>
        <h2>Prepare for your dream job with resume tips, interview coaching, and career support.</h2>
        <button>Read More</button>
     </div>

     <img src={group_photo} alt=''/>

     <div className='title4'>
        <p>Internship Program</p>
        <h2>Gain real-world experience in data science with hands-on projects and a standout portfolio.</h2>
        <button>Read More</button>
     </div>

     <div className='title5'>
        <p>Fellowship Program</p>
        <h2>Collaborate on impactful projects with expert guidance in our flexible Fellowship Program.</h2>
        <button>Read More</button>
     </div>

    </div>
  )
}*/


  return (
    <div className="description-container">
      <div className="section-title">
        <p>Who we are</p>
        <h2 style={{marginBottom: "0rem"}}>Build Your Career with Our Tailored Programs</h2>
      </div>
<div className='xyz'>
<div className='first'> 
     <div className="programs-grid">
        <div className="program-card">
          <h2 className="program-title">Mentorship Program</h2>
          <p className="program-description">Learn data analytics, SQL, Python, and more with expert guidance tailored to your career goals.</p>
          <button className="read-more-button">Read More</button>
        </div>

        <div className="program-card">
          <h2 className="program-title">Job Assistance Program</h2>
          <p className="program-description">Prepare for your dream job with resume tips, interview coaching, and career support.</p>
          <button className="read-more-button">Read More</button>
        </div>
        </div>
        </div>
     
         {/* <div className="program-image">
          <img src={group_photo} alt="Group" />
        </div>  */}

       <div className="second" style={{marginTop: "14px"}}>
       <div className="program-card">
          <h2 className="program-title">Internship Program</h2>
          <p className="program-description">Gain real-world experience in data science with hands-on projects and a standout portfolio.</p>
          <button className="read-more-button">Read More</button>
        </div>

        <div className="program-card">
          <h2 className="program-title">Fellowship Program</h2>
          <p className="program-description">Collaborate on impactful projects with expert guidance in our flexible Fellowship Program.</p>
          <button className="read-more-button">Read More</button>
       
       </div>
       </div>
      </div>
      </div>
  
  );
};

export default Description;