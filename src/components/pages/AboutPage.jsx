import React from 'react';
import NavBar from '../molecules/NavBar';
import BackgroundVideo from '../molecules/BackgroundVideo';
import About from '../organisms/About';

const AboutPage = () => {
  return (
    <div className="page-container">
      <BackgroundVideo />
      <div className="container-fluid">
        <NavBar />
      </div>
      
      <div className="container-fluid tm-content-container">
        <ul className="cd-hero-slider mb-0 py-5">
          <li className="px-3" data-page-no="1">
            <div className="page-width-1 page-left">
              <About />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
