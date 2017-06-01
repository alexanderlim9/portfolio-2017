import React, {Component} from 'react';
import './App.css';

class Abstract extends Component {
  render() {
    return (
      <div className="container abstract">
        <div className="row">
          <div className="col-xs-5">
            <img src={require("./wireframe_box.png")}/>
            <div className="text">
              <h1>Title of Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="col-xs-5">
            <img src={require("./wireframe_box.png")}/>
            <div className="text">
              <h1>Title of Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-5">
            <img src={require("./wireframe_box.png")}/>
            <div className="text">
              <h1>Title of Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
          <div className="col-xs-5">
            <img src={require("./wireframe_box.png")}/>
            <div className="text">
              <h1>Title of Project</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abstract;
