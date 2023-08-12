import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <div className="container1">
        <div className="head1">
        <h1>Financial freedom begins here</h1>
        <p>All the tools you need to make wise & effective investment decision</p>
        <button type='submit'>
          <Link to="/Form"> Predict Stocks</Link>
        </button>
        </div>
      </div>

    </div>
  );
}

export default Home;