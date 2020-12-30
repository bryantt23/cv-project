function App() {
  const appState = {
    personalInfo: {
      name: 'John Doe',
      city: 'San Francisco'
    },
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

  return <div className='App'>Learn React </div>;
}

export default App;
