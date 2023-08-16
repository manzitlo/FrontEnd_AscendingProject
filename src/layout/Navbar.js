import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();
  const showNavbar = location.pathname !== '/test-view-cars';

  if (!showNavbar) {
      return null; 
  }
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                Car Insurance Statistic Application
              </Link>
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
                    <Link to="/signup" className='btn btn-outline-light me-2'>Signup</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className='btn btn-outline-light'>Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
}
