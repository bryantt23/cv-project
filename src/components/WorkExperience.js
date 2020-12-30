import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class WorkExperience extends Component {
  /*
plan
map through it and get all to render
make the last one editable but the ones before that only deletable
*/

  render() {
    const workExperienceMap = this.props.workExperience.map(job => {
      return (
        <p>
          {job.companyName} {job.location} {job.title}
        </p>
      );
    });

    return (
      <div>
        <h3>Work Experience</h3>
        {workExperienceMap}
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
