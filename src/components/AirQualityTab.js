// src/components/AirQualityTab.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdSpeed } from 'react-icons/md'; // Use an alternative speed gauge icon
import './Card.css';

const getRandomAirQuality = () => {
  return (Math.random() * (200 - 100) + 100).toFixed(1); // Simulate air quality index between 100 and 200
};

const AirQualityTab = () => {
  const [airQuality, setAirQuality] = useState(getRandomAirQuality());

  useEffect(() => {
    const interval = setInterval(() => {
      setAirQuality(getRandomAirQuality());
    }, 1000); // Update air quality every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>Air Quality</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="icon-wrapper"
      >
        <MdSpeed size={50} /> {/* Use an alternative speed gauge icon */}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {airQuality} AQI
      </motion.p>
    </div>
  );
};

export default AirQualityTab;
