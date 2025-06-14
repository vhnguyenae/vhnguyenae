import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-tabs">
        <Link 
          to="/" 
          className={`nav-tab ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/emojify" 
          className={`nav-tab ${location.pathname === '/emojify' ? 'active' : ''}`}
        >
          Emojify Text
        </Link>
        <Link 
          to="/magic-pendulum" 
          className={`nav-tab ${location.pathname === '/magic-pendulum' ? 'active' : ''}`}
        >
          Magic Pendulum
        </Link>
      </div>
    </nav>
  );
};

export default Navigation; 