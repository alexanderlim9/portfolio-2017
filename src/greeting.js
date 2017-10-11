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
          {/*<div className="row">*/}
            {/*<div className="col-xs-5 col-xs-offset-7">*/}
              {/*<button><Link to="/values">what I'm passionate about</Link></button>*/}
            {/*</div>*/}
          {/*</div>*/}
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button>the work I've done</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button><Link to="/resume">my resume</Link></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5">
              <button><a href="https://www.linkedin.com/in/alexander-lim/">Here's my LinkedIn</a></button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5">
              <button><a href="https://github.com/alexanderlim9">Here's my Github</a></button>
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
    );
  }
}

export default Greeting;
