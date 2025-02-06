// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Chat Application</h1>
      <Link to="/login" class="login"><button>Login</button></Link>
      <Link to="/signup" class="signup"><button>Signup</button></Link>
    </div>
  );
}

export default Home;
