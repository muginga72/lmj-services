import beverageImg from '/src/assets/images/beverage.png'
import React from 'react';

const BeverageServices = () => (
  <div className="container py-5">
    <h2>Retail Trade of Beverages</h2>
    <img src={beverageImg} alt="beverage" />
    <p>Offering a wide variety of drinks and refreshments.</p>
  </div>
);

export default BeverageServices;