import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/molecules/NavBar';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
};

export default App;
