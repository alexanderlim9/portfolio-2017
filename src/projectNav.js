import React, {Component} from 'react';
import './App.css';

class ProjectNav extends Component {
  render() {
    return (
      <div className="projectNav">
        <div className="prev">
          <p>Previous Project</p>
        </div>
        <div className="next">
          <p>Next Project</p>
        </div>
      </div>
    );
  }
}

export default ProjectNav;
