import React, {Component} from 'react';
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
              <button>myself</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-5 col-xs-offset-7">
              <button>what I'm passionate about</button>
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
        </div>
      </div>
    );
  }
}

export default Greeting;
