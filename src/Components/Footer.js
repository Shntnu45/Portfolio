import React from 'react';
import './Footer.css';
import Logo from '../img/Navbarlogo.png';


function Footer() {
  return (
    <>
      {/* Start Project Section (above footer) */}
      <div className="get-in-touch-section">
        <h2 className='project'> <b>Start a project?</b></h2>
        <h5 className='p'>Interested in working together? We should queue up a time to chat.</h5>
        <a href="mailto:shantanuchaudhari9221@gmail.com" className="footer-button">Get in touch</a>  
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          {/* Contact Information Section */}
          <div className="footer-contact">
            <div className="contact-info">
              <img 
                src={Logo} 
                alt="Profile Avatar"
                className="avatar" 
              />
              <h3 className='text-gradient'>SHANTANU CHAUDHARI</h3>
              <a href="mailto:shantanuchaudhari9221@gmail.com" className="email-link " >
                Mail me at shantanuchaudhari9221@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-socials">
            <h3>Reach me out on</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/shantanu-chaudhari-2404b8238/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Shntnu45" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
