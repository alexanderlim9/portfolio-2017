import React, {Component} from 'react';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <p>
                Alexander Lim
              </p>
            </div>
            <div className="col-xs-1 col-xs-offset-6">
              <p>
                Work
              </p>
            </div>
            <div className="col-xs-1">
              <p>
                About
              </p>
            </div>
            <div className="col-xs-1">
              <p>
                Resume
              </p>
            </div>
            <div className="col-xs-1">
              <p>
                Contact
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
