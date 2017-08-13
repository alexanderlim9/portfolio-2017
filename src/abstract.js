import React, {Component} from 'react';
import './App.css';

class Abstract extends Component {
  render() {
    return (
      <div className="abstract">
        <div className="col-xs-6">
          <img id="abstract-cover" src={require("./wireframe_box.png")}/>
        </div>
        <div className="col-xs-6">
          <div className="text">
            <h1>{this.props.title}</h1>
            <h2>{this.props.type}</h2>
            <p>
              {this.props.blurb}
            </p>
          </div>
        </div>

      </div>
    );
  }
}

Abstract.defaultProps = {
  title: "Title of Project",
  type: "Type of work",
  blurb: "Lorem ipsum dolor sit amet consectetur"
}

export default Abstract;
