import React, { useState } from 'react';
import './style.css';
import image from './images/download.png';
import Search from './serach';
import { useLocation, Link } from 'react-router-dom';
import SubmitPhoto from './submitphoto'; 

const Navbar = () => {
  const location = useLocation();
  const [showSubmitPhoto, setShowSubmitPhoto] = useState(false);

  const toggleSubmitPhotoPopup = () => {
    setShowSubmitPhoto(!showSubmitPhoto);
  };

  const isBlogRoute = location.pathname === '/blog';

  if (isBlogRoute) {
    return null;
  }

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">
          <img src={image} alt="logo" width={50} height={50} />
        </Link>
        <Search />

        <div className="nav-links">
          <p>Advertise</p>
          <Link to='/blog'><p>Blog</p></Link>
          <Link to='/explore'><p>Explore</p></Link>
          <Link to='/submitphoto'>
            <button onClick={toggleSubmitPhotoPopup}>Submit a photo</button> 
          </Link>
          <Link to="login">
            <p>Login</p>
          </Link>
          <p>menu</p>
        </div>
      </div>
      <div className="nav2">
        <ul>
          <li>
            <Link to="/">Editorial</Link>
          </li>
          <li>Following</li>
          <li>Unsplash+</li>
          <li className="line">|</li>

          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/nature">Nature</Link>
          </li>
          <li>
            <Link to="/animal">Animals</Link>
          </li>
          <li>
            <Link to="/art">Architecture & Interiors</Link>
          </li>
         
        </ul>
      </div>

      {showSubmitPhoto && <SubmitPhoto onClose={toggleSubmitPhotoPopup} />}
    </div>
  );
};

export default Navbar;
