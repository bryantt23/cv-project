import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Add Job</h3>
        <button onClick={() => this.props.addNewJob()}>Add this new job</button>
        <EditableLabel
          value={this.props.companyName}
          changeHandler={this.props.changeHandler('companyName')}
          keyName='companyName'
          labelName='Company Name'
        />
        <EditableLabel
          value={this.props.title}
          changeHandler={this.props.changeHandler('title')}
          keyName='title'
          labelName='Title'
        />
        <EditableLabel
          value={this.props.location}
          changeHandler={this.props.changeHandler('location')}
          keyName='location'
          labelName='Location'
        />
      </div>
    );
  }
}

export default Job;
