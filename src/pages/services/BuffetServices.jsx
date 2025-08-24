import buffetImg from "/src/assets/images/buffet.png";
import React from "react";

const BuffetServices = () => (
  <div className="container py-5">
    <h2>Buffet Services</h2>
    <img src={buffetImg} alt="buffet" />
    <p>Delicious self-serve meals for events and gatherings.</p>
  </div>
);

export default BuffetServices;