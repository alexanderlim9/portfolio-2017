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
              <button><Link to="/values">what I'm passionate about</Link></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button>the projects I've done so far</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button>where I've worked</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button><Link to="/resume">my resume</Link></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <p id="footer-note">*This site is very much a work in progress, but please enjoy what I have so far!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;