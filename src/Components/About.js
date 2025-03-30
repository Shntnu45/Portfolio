import React from 'react';
import Myimg from '../img/Coder.png';
import './About.css'

const Stats = () => {
  return (
    <div>
      <hr className="white-line" />
      <div className="stats-container">
        <div className="left-container">
          <div className="coderlogo-container">
            <img className="coderlogo myimg" src={Myimg} alt="Logo" />
          </div>
        </div>
        <div className="right-container">
          <div className="About-section">
            <h1 className="Edu text-gradient">About</h1>
            <p>
              <span className="typewriter">
                👋 Hey there, I’m Shantanu Chaudhari, a passionate Web Developer and 
                Computer Engineering student with a strong foundation in modern web
                technologies and a keen interest in Software Developer.
              </span>
              <span className="fade-in">
                Currently pursuing my Bachelor's degree in Computer Engineering at Sandip Foundation, I have honed my skills in HTML, CSS, JavaScript, ReactJS, and Bootstrap, alongside proficiency in programming languages like C and C++.
                <br /><br />
                🌆 🌐 Over the past few months, I've gained practical experience through hands-on projects and internships, where I’ve developed responsive, user-friendly web applications and contributed to network security efforts. My projects include developing a weather-checking web application showcasing real-time data integration.
                <br /><br />
                I thrive in collaborative environments, having worked in Agile settings during my internships, and I’m constantly seeking opportunities to apply my skills in real-world scenarios. My journey as a web developer is driven by a relentless curiosity and a commitment to continuous learning, with a focus on delivering innovative digital solutions.
                <br /><br />
                In addition to my technical expertise, I bring strong communication, problem-solving, and time management skills, which have been pivotal in both academic and professional settings. I am eager to contribute to impactful projects and further my growth in the tech industry.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
