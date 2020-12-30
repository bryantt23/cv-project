import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: this.props.name
    // };
  }
  /*
plan
map through it and get all to render
make the last one editable but the ones before that only deletable
*/

  render() {
    return (
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
