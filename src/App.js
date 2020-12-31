import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import WorkExperiences from './components/WorkExperience';
import SchoolExperiences from './components/SchoolExperience';

const appState = {
  name: 'John Does',
  city: 'San Francisco',
  schoolExperience: [
    {
      name: 'USC',
      location: 'Los Angeles',
      courseOfStudy: 'English'
    },
    {
      name: 'The Odin Project',
      location: 'Online',
      courseOfStudy: 'Web development'
    }
  ],
  workExperience: [
    {
      companyName: 'Bank',
      location: 'Los Angeles',
      title: 'Teller'
    },
    {
      companyName: 'Website Builders',
      location: 'Long Beach',
      title: 'Intern'
    },
    {
      companyName: 'Freelance',
      location: 'Remote',
      title: 'Software engineer'
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.changeHandler = this.changeHandler.bind(this);

    // Set some state
    this.state = {
      ...appState
    };
  }

  // just going to brute force and pass entire object to every child
  // This method will be sent to the child component
  changeHandler(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { name, city, workExperience, schoolExperience } = this.state;
    return (
      <div>
        <h1>CV Application</h1>
        <p>{JSON.stringify(this.state)}</p>
        <PersonalInfo
          name={name}
          city={city}
          changeHandler={this.changeHandler}
        />
        <WorkExperiences
          arrayName='workExperience'
          experience={workExperience}
          changeHandler={this.changeHandler}
          experienceType='Work'
        />
        <SchoolExperiences
          arrayName='schoolExperience'
          experience={schoolExperience}
          changeHandler={this.changeHandler}
          experienceType='School'
        />
      </div>
    );
  }
}

export default App;
