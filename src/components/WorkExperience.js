import React, { Component } from 'react';
import Job from './Job';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewJob: false,
      companyName: 'Add Company Name Here',
      title: 'Add Job Title Here',
      location: 'Add Location Here',
      editingJob: false
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(key, value) {
    this.setState({ [key]: value }, () => console.log(this.state));
  }

  deleteFromArray(index) {
    let arrayCopy = [...this.props.experience];
    arrayCopy.splice(index, 1);
    this.props.changeHandler(this.props.arrayName, arrayCopy);
  }

  showAddExperienceForm() {
    this.setState({ addNewJob: true });
  }

  addNewJob = () => {
    const { title, companyName, location } = this.state;
    const newJob = { title, companyName, location };
    const newArray = [...this.props.experience, newJob];
    this.props.changeHandler(this.props.arrayName, newArray);
    this.setState({ editingJob: false });
  };

  //for edit put last element into state, delete last element, & then call addNewJob
  editJob = () => {
    const experience = this.props.experience;
    const len = experience.length;
    const { title, companyName, location } = experience[len - 1];
    this.setState({ title, companyName, location });
    this.deleteFromArray(len - 1);
    this.setState({ editingJob: true, addNewJob: true });
  };

  render() {
    const len = this.props.experience.length;
    const experienceArr = [];
    for (let i = 0; i < len; i++) {
      let job = this.props.experience[i];
      if (i === len - 1) {
        experienceArr.push(
          <p key={i}>
            Company Name: {job.companyName}, Title: {job.title}, Location:{' '}
            {job.location} <button onClick={() => this.editJob()}>Edit</button>
          </p>
        );
      } else {
        experienceArr.push(
          <p key={i}>
            Company Name: {job.companyName}, Title: {job.title}, Location:{' '}
            {job.location}{' '}
            <button onClick={() => this.deleteFromArray(i)}>Delete</button>
          </p>
        );
      }
    }

    const experienceType = this.props.experienceType;
    const { companyName, title, location } = this.state;
    const message = this.state.editingJob
      ? `Edit ${experienceType}`
      : `Add ${experienceType}`;
    return (
      <div>
        <h3>{experienceType} Experience</h3>
        {this.state.addNewJob && (
          <button onClick={() => this.setState({ addNewJob: false })}>
            Show {experienceType}
          </button>
        )}
        {!this.state.addNewJob && (
          <button onClick={() => this.showAddExperienceForm()}>
            Add {experienceType} Experience
          </button>
        )}
        {!this.state.addNewJob && experienceArr}
        {this.state.addNewJob ? (
          <Job
            companyName={companyName}
            title={title}
            location={location}
            changeHandler={() => this.changeHandler}
            addNewJob={() => this.addNewJob()}
            message={message}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default WorkExperience;
