import React from 'react';
import './Experience.css'
const ExperienceSection = () => {
  return (
    <div>
      <h1 className="experience-header text-gradient">EXPERIENCE</h1>

      <div className="experience-section container ">
      <div className="experience-card highlighted col-md-4">
          <h4 className="experience-title ">Web Developer Intern </h4>
          <p className="experience-subtitle">Aarohi Software </p>
          <h5 className="experience-duration">Aug/2024 - present</h5>
          <br/>

          <ul className="experience-details">
            <li>Developed responsive web applications using React</li>
            <li>Collaborated with teamates to create user-friendly interfaces</li>
            <li>Used version control systems such as Git to manage code and collaborate with others teammates</li>
            <li> Participate in Daily team meetings and contribute to project discussions and brainstorming sessions</li>
          </ul>
        </div>
        <div className="experience-card highlighted col-md-4">
          <h4 className="experience-title">Web Developer Intern (On site)</h4>
          <p className="experience-subtitle">At.Nerdtech Software </p>
          <h5 className="experience-duration">Dec/2023-Feb/2024</h5>
          <br/>

          <ul className="experience-details">
            <li>Developed responsive web applications using React</li>
            <li>Collaborated with designers to create user-friendly interfaces</li>
            <li>Utilize HTML, CSS, JavaScript, Bootstrap, and ReactJs to create responsive & visually appealing web.</li>
            <li>Conduct testing and debugging to ensure cross-browser compatibility and smooth functionality.</li>
           
          </ul>
        </div>
        <div className="experience-card highlighted col-md-4">
          <h4 className="experience-title">Web Developer Intern </h4>
          <p className="experience-subtitle">At.Exposys Data Labs </p>
          <h5 className="experience-duration">Mar/2024-Apr/2024</h5>
          <br/>
          <ul className="experience-details">
          <li>Developed responsive web applications using React</li>
          <li>Designed and developed a responsive restaurant web page using React.js, enhancing user experience across various devices and screen sizes.</li>
            <li> Utilized React Router for seamless navigation between different pages, including home, menu, about, and contact sections.</li>
          </ul>
        </div>
      </div>
      <hr className="white-line" />

    </div>
  );
};

export default ExperienceSection;
