import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Greeting extends Component {
  render() {
    return (
      <div className="container greeting">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              Hello!
            </h1>
            <p>My name is Alexander Lim, but you can call me Alex.</p>
          </div>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-3">
              <label>Let me tell you all about...</label>
            </div>
            <div className="col-xs-5">
              <button><Link to="/about">myself</Link></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button><a target="_blank" href="https://alexmlim7.myportfolio.com/">the work I've done</a></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button><Link to="/resume">my resume</Link></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-10">
              <div className="social-profiles">
                <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/alexander-lim/">
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                <a className="social-icon" target="_blank"  href="https://github.com/alexanderlim9">
                  <i className="fa fa-github fa-lg" aria-hidden="true"></i></a>
                <a className="social-icon" target="_blank"  href="https://www.instagram.com/phantomlim9/?hl=en">
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p id="footer-note">*In the true spirit of Agile, this site is more of an MVP&mdash;it
                doesn't totally work yet, but it's at least semi-functional for now.</p>
            </div>
          </div>
        </div>
      </div>
    )
      ;
  }
}

export default Greeting;
