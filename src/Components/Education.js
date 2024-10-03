import React from 'react';
import './Education.css';

const EducationSection = () => {
  return (
    <div className="education-container">
      <h1 className="Edu text-gradient">EDUCATION</h1>

      <div className="education-content ">
        <div className="education-card highlighted">
          <h3 className="education-title">Secondary School Certificate <br/> (SSC)</h3>
          <p className="education-subtitle">74.00 Percentage</p>
          <h5 className="education-duration">July/2018 - June/2019</h5>
          <ul className="education-details">
            <li>Sardar Vallbhbhai Patel Vidyalaya & Junior College Ainpur</li>
          </ul>
        </div>
        <div className="education-card highlighted">
          <h3 className="education-title">Bachelor's Degree</h3>
          <h2 className="education-duration">persuing</h2>
          <p className="education-subtitle">Computer Science & Engineering</p>
          <h2 className="education-duration">2021 - 2025</h2>
          <ul className="education-details">
            <li>Sandip Institute of Technology and Research Center Nashik</li>
          </ul>
        </div>
        <div className="education-card highlighted">
          <h3 className="education-title">Higher Secondary School<br/> (HSC)</h3>
          <p className="education-subtitle">77.33 Percentage</p>
          <h5 className="education-duration">July/2020 - June/2021</h5>
          <ul className="education-details">
            <li>Sardar Vallbhbhai Patel Vidyalaya & Junior College Ainpur</li>
          </ul>
        </div>
      </div>
      <hr className="white-line" />
    </div>
  );
};

export default EducationSection;
