// src/components/HumidityTab.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WiHumidity } from 'react-icons/wi'; // Use a humidity icon
import './Card.css';

const getRandomHumidity = () => {
  return (Math.random() * (80 - 30) + 30).toFixed(1); // Simulate humidity between 30 and 80%
};

const HumidityTab = () => {
  const [humidity, setHumidity] = useState(getRandomHumidity());

  useEffect(() => {
    const interval = setInterval(() => {
      setHumidity(getRandomHumidity());
    }, 1000); // Update humidity every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h2>Humidity</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="icon-wrapper"
      >
        <WiHumidity size={50} /> {/* Humidity icon */}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {humidity} %
      </motion.p>
    </div>
  );
};

export default HumidityTab;
