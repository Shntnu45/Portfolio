import React from 'react';
// import frontend from '../img/icon-frontend.png';
// import Backend from '../img/icon-backend.png';
// import UIUX from '../img/icon-512x512.png';
import './Main.css';
import Mainimg from '../img/Navbarlogo.png';

function App() {
  return (
    <main className='bg'>
    <div className="container main">
      <div className="left">
        <div className="marquee-container1">
          <h5 className="marquee-text1">Welcome to my Portfolio..!!</h5>
        </div>
        <br/>
        <div className="hero-content">
          <h2 className="Shant text-white text-gradient">SHANTANU CHAUDHARI</h2>
          <div className='title-container'>
         <h5 className='title'> Hello, I'm Web Developer</h5>
          <h5 className='title'>Hello, I'm Software Developer</h5>

          </div>
          <br/>

          <p> 
            "Aspiring web developer with a strong foundation in building responsive and user-friendly applications, eager to apply skills and knowledge to deliver innovative solutions and continuously learn and grow in the industry."
          </p>
          <div className="hero-buttons">
            <button
              className="get-started"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1YpBlSngL16qI_Rz38Kc0UuWxvmhLykuj/view?usp=sharing',
                  '_blank'
                )
              }
            >
              ⚡DOWNLOAD RESUME
            </button>
            <button
              className="see-docs"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/shantanu-chaudhari-2404b8238'
                )
              }
            >
              LinkedIn ↗
            </button>
            <button
              className="see-docs"
              onClick={() => window.open('https://github.com/Shntnu45')}
            >
              GitHub ↗
            </button>
          </div>
        </div>
      </div>
      <div className="right">
  <div className="coderlogo-container">
    <img className="coderlogo animated-logo" src={Mainimg} alt="Logo" />
  </div>
</div>

    </div>
    </main>
  );
}

export default App;
