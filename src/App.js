import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import TemperatureTab from './components/TemperatureTab';
import HumidityTab from './components/HumidityTab';
import AirQualityTab from './components/AirQualityTab';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="tabs">
          <NavLink to="/temperature" className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}>Temperature</NavLink>
          <NavLink to="/humidity" className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}>Humidity</NavLink>
          <NavLink to="/air-quality" className={({ isActive }) => (isActive ? 'active-tab' : 'tab')}>Air Quality</NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route path="/temperature" element={<TemperatureTab />} />
            <Route path="/humidity" element={<HumidityTab />} />
            <Route path="/air-quality" element={<AirQualityTab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
