import React from 'react';
import beautySalonImg from '/images/beautySalon.png';

const BeautyServices = () => (
  <div className="container py-5">
    <h2>Beauty Salon</h2>
    <img src={beautySalonImg} alt="beauty" />
    <p>Hair, skin, and nail treatments to help you shine.</p>
  </div>
);

export default BeautyServices;