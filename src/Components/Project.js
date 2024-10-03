import React from 'react';
import Car from '../img/Screenshot (173).png'
import Eccomerse from '../img/Screenshot (174).png'
import Restaurant from '../img/Screenshot (175).png'


function App() {
  return (
    <div>      <h1 className='text-gradient S2'>MY Projects</h1>
    <div className="container">
      <div className="courses">
        <div className="course highlighted ">
          <img src={Car} alt="Car" />
          <br/>
          <div className="course-info">
            <h5>Car Rental Web Page  </h5>
            <h6>Tools used :</h6>

            <div className="tags">
              <span>React js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>UI</span>

            </div>
            <button className="get-started" onClick={() => window.open('https://github.com/Shntnu45/Car_RentalNew', '_blank')}>⚡Redirect</button>
            </div>
        </div>
        <div className="course highlighted ">
          <img src={Eccomerse} alt="Ecom" />
          <div className="course-info">
            <h5>E-Commerse Web Page </h5>
            <h6>Tools used :</h6>

            <div className="tags">
            <span>React js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>UI</span>
            </div>
            <button className="get-started" onClick={() => window.open('https://github.com/Shntnu45/Ecommerce', '_blank')}>⚡Redirect</button>
            </div>
        </div>
        <div className="course highlighted">
          <img src={Restaurant} alt="Restaurant" />
          <div className="course-info">
            <h6>Restaurant Web Page </h6>

            <h6>Tools used :</h6>

            <div className="tags">
            <span>React js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>UI</span>
            </div>
            <button className="get-started" onClick={() => window.open('https://github.com/Shntnu45/Restaurantweb', '_blank')}>⚡Redirect</button> 
</div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;