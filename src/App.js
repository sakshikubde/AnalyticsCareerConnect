import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import First from './components/hero/hero';
import Des from './components/Programs/Programs';
import Title from './components/Title/Title';
import Slid from './components/slider/slider';
import Footer from './components/footer/footer';
import Who from './components/whoare/whoarewe';
import Contact from './components/contact/contact';


// Import Pages
import Mentor from './navlink/mewntorship/entor';
import Intern from './navlink/Internship/internship';
import Job from './navlink/job/job';

//wb=ebpages
import Con from './webpages/contact/contact'
import Ab from './webpages/about/about'
import Services from './webpages/Services/services'
import Career from './webpages/career/career'

function HomePage() {
  return (
    <>
      <First />
      <div className="container">
        <Title subTitle="Why Choose Analytics Career Connect?" title="Empower careers with tailored programs and proven success." />
        <Des />
      </div>
      <Slid />
      <Who />
      <Contact />
    </>
  );
}

function AppContent({ theme, setTheme }) {
  return (
    <div className={`container ${theme}`} style={{ margin: "0%" , padding: "0%" }}>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/mentorship" element={<Mentor />} /> {/* Mentorship Page Route */}
        <Route path="/internship" element={<Intern />} /> {/* Internship Page Route */}
        <Route path='/job' element={<Job/>} />
        <Route path = '/contact' element= {<Con/>} />
        <Route path = '/about1' element= {<Ab/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/career' element={<Career/>}/>
      </Routes>

      <Footer />  
    </div>
  );
}

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <Router>
      <AppContent theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;
