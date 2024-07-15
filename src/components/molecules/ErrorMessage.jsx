import React from 'react';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import './ErrorMessage.css';

const ErrorMessage = ({ title, message }) => {
  return (
    <div className="error-message">
      <Heading className='tittle'>{title}</Heading>
      <Text>{message}</Text>
    </div>
  );
};

export default ErrorMessage;
