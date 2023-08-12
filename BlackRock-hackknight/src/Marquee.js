import React from 'react';
import './Marquee.css'; // Import the CSS file

const Marquee = ({ data }) => {
  return (
    <div className="marquee-container">
      <marquee behavior="scroll" direction="left">
        {data.map((item, index) => (
          <span key={index} className="marquee-item">
            {item.stockName} - 
            <span className='marquee-item2' >${item.price}</span>
          </span>
        ))}
      </marquee>
    </div>
  );
};

export default Marquee;
