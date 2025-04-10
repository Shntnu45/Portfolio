import React from 'react';
import './Skills.css';
import tailwind from "../img/Tailwind_CSS_Logo.svg.png";


function TrustedBy() {
  return (
    <div>
      <hr className="white-line" />
      <h1 className='text-gradient S2'>Skills</h1>
      <h3 className='S2'>Frontend Programming Languages and Tools</h3>

      <div className="skills-grid">
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" /></div>
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" /></div>
        <div><img src={tailwind} alt="Tailwind CSS" /></div>
      </div>

      <h2 className='text-gradient S1'>LEARNING PHASE</h2>
      <h3 className='S2'> Backend Programming Languages and Tools</h3>

      <div className="skills-grid">
      <div><img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" /></div>
      <div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL Logo" />
</div>

  <div><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" alt="Spring Framework" /></div>
  <div><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" /></div>
  <div>
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle Logo" />
</div>
      </div>

      <hr className="white-line" />
    </div>
  );
}

export default TrustedBy;
