import React from 'react' 
import './hero.css'
import dark_arrow from "../hero/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education For a Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
       <button className='btn' style={{borderRadius:"5rem",padding:"0.5rem 2rem",backgroundColor:"white"}}>Explore More<img src={dark_arrow} alt='ok'
       /> </button>
        </div>
      
    </div>
  )
}

export default Hero
