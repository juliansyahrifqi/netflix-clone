/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />
    </div>
  );
}
