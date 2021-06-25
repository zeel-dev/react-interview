import React from 'react';
import logo from './logo.svg';

// Fetch users with local api http://localhost:8099/users

const Home = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="page">
        <p>Render some users here</p>
      </div>
    </div>
  );
}

export default Home;
