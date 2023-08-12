import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Marquee from './Marquee'
import Home from './Home';
import Profile from './Profile';
import Form from './Form';
import CustomBarChart from './BarChart';
import Chatbot from './ChatBot';  // Import your Chatbot component

const stockData = [
    { stockName: 'AAPL', price: 150.25 },
    { stockName: 'GOOG', price: 2750.50 },
    { stockName: 'AMZN', price: 3450.75 },
    { stockName: 'MSFT', price: 305.40 },
    { stockName: 'TSLA', price: 720.10 },
    { stockName: 'FB', price: 365.80 },
    { stockName: 'NVDA', price: 235.60 },
    { stockName: 'NFLX', price: 550.20 },
    { stockName: 'PYPL', price: 280.30 },
    { stockName: 'SHOP', price: 1500.00 },
    { stockName: 'CRM', price: 275.90 },
    { stockName: 'BABA', price: 180.50 },
    { stockName: 'V', price: 250.70 },
    { stockName: 'MA', price: 380.00 },
    { stockName: 'JPM', price: 150.90 },
    { stockName: 'UNH', price: 400.60 },
    { stockName: 'PG', price: 140.40 },
    { stockName: 'DIS', price: 185.75 },
    { stockName: 'PYPL', price: 280.30 },
    { stockName: 'SHOP', price: 1500.00 },
    // Add more stocks here
    ];

function AppRouter()
     {
    return (
        <Router>
            <Marquee data={stockData} />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/ChatBot" element={<Chatbot />} /> 
            </Routes>
        </Router>
    );
}

export default AppRouter;