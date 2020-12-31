import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class School extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>{this.props.message}</h3>
        <button onClick={() => this.props.addNewJob()}>
          {this.props.message}
        </button>
        <EditableLabel
          value={this.props.name}
          changeHandler={this.props.changeHandler('name')}
          keyName='name'
          labelName='School Name'
        />
        <EditableLabel
          value={this.props.courseOfStudy}
          changeHandler={this.props.changeHandler('courseOfStudy')}
          keyName='courseOfStudy'
          labelName='Course of Study'
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

export default School;
