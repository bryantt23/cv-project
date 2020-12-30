import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <h3>Personal Info</h3>
        <EditableLabel
          value={this.props.name}
          changeHandler={this.props.changeHandler}
          keyName='name'
          labelName='Name'
        />
        <EditableLabel
          value={this.props.city}
          changeHandler={this.props.changeHandler}
          keyName='city'
          labelName='City'
        />
      </div>
    );
  }
}

export default PersonalInfo;
