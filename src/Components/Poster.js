import React from 'react';

import img from '../img/shantanu linkdin Banner.png'

function Poster() {
  return (
    <div>
     <hr className="white-line" />

     <div className="poster-container">
        <img src={img} alt="Poster" className="poster-image"/>
      </div>
                <hr className="white-line" />
    </div>
  );
}

export default Poster;
