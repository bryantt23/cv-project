import React, { Component } from 'react';
import EditableLabel from './EditableLabel';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: this.props.name
    // };
  }

  render() {
    return (
      <div>
        <h3>Personal Info</h3>
        <p>{JSON.stringify(this.props)}</p>
        {/* <p>{JSON.stringify(this.state)}</p> */}

        <p>Name: {this.props.name}</p>
        <p>City: {this.props.city}</p>
        {/* <p>{this.props.personalInfo.name}</p> */}

        <button onClick={() => this.props.changeHandler('name', 'jane')}>
          {' '}
          btn
        </button>
      </div>
    );
  }
}

export default PersonalInfo;
