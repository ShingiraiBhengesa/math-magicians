import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/myCalculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="myCalculator" element={<MyCalculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

