import React from 'react';
import Logo from '../img/white-logo.webp'
const HeroSection = () => {
  return (
    <div id='main' className="video-container row justify-content-center align-items-center h-100">
      <video autoPlay loop muted className='video-bg'>
        <source src={require('../img/first_fold_video.mp4')} type="video/mp4" />
      </video>

      <nav className="navbar ">
      <div className="container-fluid">
      <p class="text-white">  <img
              className="logo"
              src={Logo}/> Portfolio</p>
      <div className="d-flex ms-auto">
          <p to="/contact" className="text-gradient" class="text-primary">Contact me <i class="fa-sharp fa-solid fa-arrow-right"></i></p>
        </div>
      </div>
    </nav>
      <div className="col-lg-8 mx-auto text-center position-relative">
        <div className="marquee">
          <span>Welcome To My Portfolio</span>
        </div>
        <br/>
        <br/>

        <h1 className="fs-56 text-gradient mb-3">
          <span className="text-white">SHANTANU </span> CHAUDHARI
        </h1>
        <br/>
        <h2 className="d-block text-white fs-56 mb-3">WEB DEVLOPER </h2>
        <h3 className="fs-18 fw-normal text-white">
          "Aspiring web developer with a strong foundation in building responsive and user-friendly applications, eager to apply skills and knowledge to deliver innovative solutions and continuously learn and grow in the industry."
        </h3>
        <button className="btn btn-dark btn-dark-primary mt-5 rounded-3 fs-16" onClick={() => window.open('https://drive.google.com/file/d/1ltD_txQTEF2joHbDgjBhTNbTGhxQ4_7o/view?usp=sharing', '_blank')}>DOWNLOAD RESUME</button>

        <br/>
        <br/>

      </div>
    </div>
  );
};

export default HeroSection;












