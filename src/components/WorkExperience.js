import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class WorkExperience extends Component {
  /*
plan
map through it and get all to render
make the last one editable but the ones before that only deletable
*/

  render() {
    const len = this.props.workExperience.length;
    const workExperienceArr = [];
    for (let i = 0; i < len; i++) {
      let job = this.props.workExperience[i];
      if (i === len - 1) {
        workExperienceArr.push(
          <p>
            {job.companyName} {job.location} {job.title} <button>Edit</button>
          </p>
        );
      } else {
        workExperienceArr.push(
          <p>
            {job.companyName} {job.location} {job.title} <button>Delete</button>
          </p>
        );
      }
    }

    return (
      <div>
        <h3>Work Experience</h3>
        {workExperienceArr}
        {/* <p>{JSON.stringify(this.props.workExperience)}</p> */}
      </div>
      //   <div>
      //     <h3>Personal Info</h3>
      //     <EditableLabel
      //       value={this.props.name}
      //       changeHandler={this.props.changeHandler}
      //       keyName='name'
      //       labelName='Name'
      //     />
      //     <EditableLabel
      //       value={this.props.city}
      //       changeHandler={this.props.changeHandler}
      //       keyName='city'
      //       labelName='City'
      //     />
      //   </div>
    );
  }
}

export default WorkExperience;
