import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Profile.css';

function Profile() {
    
  const [chartData,setChartData] = useState("");

  return (

    <div className="profile-page">
    <h2 className="profile-heading">My Profile</h2>
    <div className="main-container">
      <div className="profile-container">
        {chartData.length ? (
          <BarChart
            className="user-chart"
            layout="vertical"
            width={950}
            height={600}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={150} tick={{ fontSize: 14, fill: 'white', fontWeight: 'bold' }} /> 
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        ) : (
          <h2>No data available, First Fill the Form</h2>
        )}
      </div>
      <div className="card-container">
        <div className="prediction-card">
          <h2>Predictions</h2>
          <p>Invest in Today!</p>
        </div>
        <div className="recommendation-card">
          <h2>Stock Recommendations</h2>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Profile;
