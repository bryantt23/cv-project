import React, { Component } from 'react';
import EditableLabel from './EditableLabel';
import Job from './Job';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showJob: false,
      companyName: 'Add Company Name Here',
      title: 'Add Job Title Here',
      location: 'Add Location Here'
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  /*
plan
map through it and get all to render
make the last one editable but the ones before that only deletable
get delete working
then edit stuff workigng

*/

  changeHandler(key, value) {
    this.setState({ [key]: value }, () => console.log(this.state));
  }

  deleteFromArray(index) {
    const newArray = this.props.workExperience.splice(index, 1);
    this.props.changeHandler('workExperience', newArray);
  }

  showAddWorkExperienceForm() {
    console.log('c');
    this.setState({ showJob: true });
    console.log(this.state);
  }

  addNewJob = () => {
    console.log('addNewJob');
    const { title, companyName, location } = this.state;
    const newJob = { title, companyName, location };
    const newArray = [...this.props.workExperience, newJob];
    this.props.changeHandler('workExperience', newArray);
  };

  render() {
    const len = this.props.workExperience.length;
    const workExperienceArr = [];
    for (let i = 0; i < len; i++) {
      let job = this.props.workExperience[i];
      if (i === len - 1) {
        workExperienceArr.push(
          <p key={i}>
            Company Name: {job.companyName}, Title: {job.title}, Location:{' '}
            {job.location} <button>Edit</button>
          </p>
        );
      } else {
        workExperienceArr.push(
          <p key={i}>
            Company Name: {job.companyName}, Title: {job.title}, Location:{' '}
            {job.location}{' '}
            <button onClick={() => this.deleteFromArray(i)}>Delete</button>
          </p>
        );
      }
    }

    const { companyName, title, location } = this.state;

    return (
      <div>
        <h3>Work Experience</h3>
        {this.state.showJob && (
          <button onClick={() => this.setState({ showJob: false })}>
            Show all jobs
          </button>
        )}
        {!this.state.showJob && (
          <button onClick={() => this.showAddWorkExperienceForm()}>
            Add work experience
          </button>
        )}
        {!this.state.showJob && workExperienceArr}
        {this.state.showJob ? (
          <Job
            companyName={companyName}
            title={title}
            location={location}
            changeHandler={() => this.changeHandler}
            addNewJob={() => this.addNewJob()}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default WorkExperience;
