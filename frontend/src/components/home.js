// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-4">Your Name</h1>
          <p className="lead">Web Developer | Designer | Problem Solver</p>
          <hr className="my-4" />
          <p>
            Welcome to my portfolio! I am a passionate web developer with a focus on creating
            user-friendly and elegant solutions. Explore my projects and skills below.
          </p>
          <Link to="/projects" className="btn btn-primary btn-lg mr-2">
            View Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Contact Me
          </Link>
        </div>
        <div className="col-lg-4">
          <img
            src="path-to-your-profile-image.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
