import React from 'react';
import tutoringImage from '/src/assets/images/tutoring.png';

const TutoringServices = () => (
  <div className="service-page">
    <h1>Tutoring</h1>
    <img src={tutoringImage} alt="Tutoring" />
    <p>We offer personalized tutoring sessions tailored to each student's learning style and goals.</p>
  </div>
);

export default TutoringServices;