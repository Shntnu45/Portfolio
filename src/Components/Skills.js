import React from 'react';
import './Skills.css';
import tailwind from "../img/Tailwind_CSS_Logo.svg.png"
import Mongo from "../img/mongo.png"
import Express from "../img/express-removebg-preview.png"


function TrustedBy() {
  return (
    <div>
            <hr className="white-line" />
          
      <div > 
        
          <h1  className='text-gradient S2'> SKILLS </h1> 
          <h3 className='S2'> Frontend Programming Languages and Tools</h3> 

        </div>      
      <div className="marquee-container">
        <div className="marquee marquee-left">
          <div className="logos">
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" /></div>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" /></div>
            <div>
  <img src= {tailwind}alt="Tailwind CSS Logo" />
  
</div>

       
          </div>
        </div>
        <br/> 
        <div > 
          <h2  className='text-gradient  S1'> LEARNING PHASE  </h2> 
          <h3 className='S2'>  Programming Languages and Tools </h3> 

        </div>
        <div className="marquee marquee-right">
          <div className="logos">
         <div>
          <img class="white-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
          </div>
        <div>
        <div>
  <img class="Express" src={Express} alt="Express" />
</div>
           <img class="white-logo" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" />
        </div>
        
          <div>
            <img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" />
          </div>
          

          <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" />
          </div>

          <div>
  <img class="white-logo" src={Mongo} alt="MongoDB" />
</div>

            
          </div>
        </div>
      </div>
      <hr className="white-line" />

    </div>
  );
}

export default TrustedBy;
