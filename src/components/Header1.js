import React from 'react'
import {  Link } from "react-router-dom"; // Import 'Routes'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog , faArrowLeft  } from '@fortawesome/free-solid-svg-icons';

const Header1 = () => {


  return (
    <div>
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              <FontAwesomeIcon icon={faCog} />
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/" className="nav-link">
              User Form
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
      
    </div>
  )
}

export default Header1
