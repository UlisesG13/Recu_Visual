import React from 'react';
import NavBar from '../molecules/NavBar';
import BackgroundVideo from '../molecules/BackgroundVideo';
import ErrorMessage from '../molecules/ErrorMessage';
import ActionButton from '../molecules/ActionButton';
import { useNavigate } from 'react-router-dom';

const ErrorContainer = () => {
  const navigate = useNavigate();
  
  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="page-container">
      <BackgroundVideo />
      
      <div className="container-fluid tm-content-container">
        <ErrorMessage 
          title=" ERROR 404" 
          message="Lo sentimos, la página se encuentra en mantenimiento" 
        />
        <ActionButton onClick={handleBackHome}>
          Volver a la página principal
        </ActionButton>
      </div>
    </div>
  );
};

export default ErrorContainer;
