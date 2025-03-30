import React from 'react';
import MainGif from '../img/IMG_6305.GIF';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="Edu-section">
        <div className="sect">
          <div className='digit'>500+</div>
          <div>Coding Problem Solved</div>
        </div>
        <div className="vertical-line"></div>
        <div className="sect">
          <div className='digit'>15+</div>
          <div>Projects as Web Developer</div>
        </div>
        <div className="vertical-line"></div>
        <div className="sect">
          <div className='digit'>10+</div>
          <div>Technologies</div>
        </div>
        <div className="vertical-line"></div>
        <div className="sect">
          <div className='digit'>20+</div>
          <div>Participation in Workshops & Hackathons</div>
        </div>
      </div>
      <div className="coderlogo-container">
      <img className="coderlogo" src={MainGif} alt="Animated Logo" />
      </div>
    </div>
  );
};

export default Stats;
