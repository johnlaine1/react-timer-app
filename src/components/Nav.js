import React, {Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
        
          <div className="navbar-brand">
            <Link to="/">React Timer App</Link>
          </div>
          
          <ul className="nav navbar-nav">
            <li>
              <Link to="/" activeClassName="active">Timer</Link>
            </li>
            <li>
              <Link to="/" activeClassName="active">Countdown</Link>
            </li>
          </ul>
          
          <p className="navbar-text navbar-right">
            Created by <a href="https://www.linkedin.com/in/john-laine/">John Laine</a>
          </p>
        </div>
      </nav>
    );
  }
}

export default Nav;