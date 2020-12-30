import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';

const appState = {
  name: 'John Does',
  city: 'San Francisco',
  schoolInfo: [
    {
      schoolName: 'USC',
      location: 'Los Angeles',
      courseOfStudy: 'English'
    },
    {
      schoolName: 'The Odin Project',
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
    // if (key === 'name') {
    this.setState({ [key]: value });
    // this.setState({
    //   {...this.state, {...personalInfo={name: value}}}
    // })
    // }
  }

  render() {
    const { name, city, workExperience } = this.state;
    return (
      <div>
        <h1>CV Application</h1>
        <p>{JSON.stringify(this.state)}</p>
        <PersonalInfo
          name={name}
          city={city}
          changeHandler={this.changeHandler}
        />
        <WorkExperience
          workExperience={workExperience}
          changeHandler={() => this.changeHandler()}
        />
      </div>
    );
  }
}

export default App;
