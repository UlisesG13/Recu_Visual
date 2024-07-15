import React from 'react';
import Button from '../atoms/Button';
import './ActionButton.css';

const ActionButton = ({ onClick, children }) => {
  return (
    <div className="action-button">
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};

export default ActionButton;
