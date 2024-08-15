// src/components/TemperatureTab.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaThermometerHalf } from 'react-icons/fa'; // Use a thermometer icon
import './Card.css';

const getRandomTemperature = () => {
  return (Math.random() * (35 - 20) + 20).toFixed(1); // Simulate temperature between 20 and 35°C
};

const TemperatureTab = () => {
  const [temperature, setTemperature] = useState(getRandomTemperature());

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(getRandomTemperature());
    }, 1000); // Update temperature every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>Temperature</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="icon-wrapper"
      >
        <FaThermometerHalf size={50} /> {/* Thermometer icon */}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {temperature} °C
      </motion.p>
    </div>
  );
};

export default TemperatureTab;
