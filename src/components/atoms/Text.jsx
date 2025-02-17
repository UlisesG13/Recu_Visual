import React from 'react';
import './Text.css';

const Text = ({ children }) => {
  return (
    <p className="text">{children}</p>
  );
};

export default Text;
