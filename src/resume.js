/**
 * Created by alex on 9/28/17.
 */
import React, {Component} from 'react';
import './App.css';

class Resume extends Component {
  componentDidMount() {
    this.scrollToTop()
  }

  scrollToTop() {
    // window.scrollTo(0, 750)
    var i = 2;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i += (760 - i) / 100 + .5;
      if (i > 760) clearInterval(int);
    }, 1);
  }

  render() {
    return (
      <div className="container about">
        <div className="row">
          <div className="col-xs-12">
            <img id="resume-png" src={require("./resume-10-30-17.png")} alt="resume"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
