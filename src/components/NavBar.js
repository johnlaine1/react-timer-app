import React from 'react';
import {Link, IndexLink} from 'react-router';

const NavBar = () => {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
        
          <div className="navbar-brand">
            <Link to="/">React Timer App</Link>
          </div>
          
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" activeClassName="active">Timer</IndexLink> 
            </li>
            <li>
              <Link to="countdown" activeClassName="active">Countdown</Link>
            </li>
          </ul>
          
          <p className="navbar-text navbar-right">
            Created by <a href="https://www.linkedin.com/in/john-laine/" target="_blank">John Laine</a>
          </p>
        </div>
      </nav>
    );
  };

export default NavBar;