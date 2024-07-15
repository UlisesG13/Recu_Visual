import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import './ButtonWithHover.css';
import dog from '../../assets/img/dog.jpg';
import dogHappy from '../../assets/img/dogHappy.jpg';

const ButtonWithHover = () => {
  const [bgImage, setBgImage] = useState(dog);
  const navigate = useNavigate();

  const handleMouseOver = () => setBgImage(dogHappy);
  const handleMouseOut = () => setBgImage(dog);
  const handleClick = () => {
    console.log('Button clicked!');
    navigate('/main');
  };

  return (
    <div className="button-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <Button 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Adopt & Love
      </Button>
    </div>
  );
};

export default ButtonWithHover;
