import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHandshake, faLightbulb } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {

  const location = useLocation();
  const showNavbar = location.pathname !== '/test-view-cars';

  // Assume login state for illustration. This should be fetched based on your app's state management.
  const isLoggedIn = false;

  if (!showNavbar) {
      return null; 
  }

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand">Car Insurance Statistic App</span>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className='btn btn-outline-light me-2'>
                  <FontAwesomeIcon icon={faHome} /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/discover" className='btn btn-outline-light me-2'>
                  <FontAwesomeIcon icon={faSearch} /> Discover
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/community" className='btn btn-outline-light me-2'>
                  <FontAwesomeIcon icon={faHandshake} /> Community
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/help" className='btn btn-outline-light me-2'>
                  <FontAwesomeIcon icon={faLightbulb} /> Help
                  </Link>

                </li>
                {isLoggedIn ? (
                  <>
                    <li className="nav-item auth-buttons">
                      <Link to="/dashboard" className='btn btn-outline-light me-2'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/profile" className='btn btn-outline-light me-2'>Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/logout" className='btn btn-danger'>Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item auth-buttons">
                      <Link to="/signup" className='btn btn-light me-2'>Signup</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className='btn btn-success'>Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
