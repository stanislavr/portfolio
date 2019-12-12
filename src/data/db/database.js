import Mock from '../mock';

// my info
const database = {
  information: {
    name: 'Stanislav Rashevskyi',
    aboutContent:
      'Results-oriented software developer comfortable working in a fast-paced environment under minimum supervision. Excellent team player with a positive attitude and strong communication skills. Always eager to quickly learn and use new concepts. Currently focused on the MERN stack.',
    phone: '647-970-6725',
    language: 'English',
    email: 'stan.rashevsky@gmail.com',
    address: 'Toronto, Canada',
    employmentStatus: 'Available',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/rashevskyi/',
      github: 'https://github.com/stanislavr/'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    resumeFile: '/files/resume.pdf'
  },
  contactInfo: {
    phoneNumbers: ['(647)-970-6725'],
    emailAddress: ['stan.rashevsky@gmail.com'],
    address: 'Toronto, Canada'
  },
  skills: [
    {
      title: 'HTML5'
    },
    {
      title: 'CSS3'
    },
    {
      title: 'JavaScript ES6'
    },
    {
      title: 'React'
    },
    {
      title: 'Express'
    },
    {
      title: 'MongoDB'
    },
    {
      title: 'SQL'
    },
    {
      title: 'Python'
    },
    {
      title: 'Googling'
    }
  ],
  experience: {
    workExperience: [
      {
        id: 1,
        year: 'Sep 2018 - Present',
        position: 'Project Engineer',
        company: 'Evertz Microsystems Ltd.',
        details: 'test1'
      },
      {
        id: 2,
        year: 'Sep 2017 - Jan 2018',
        position: 'Project Engineer',
        company: 'Evertz Microsystems Ltd.',
        details: 'test2'
      },
      {
        id: 3,
        year: 'May 2017 - Aug 2017',
        position: 'Project Engineer',
        company: 'Evertz Microsystems Ltd.',
        details: 'test3'
      },
      {
        id: 4,
        year: 'May 2016 - Aug 2016',
        position: 'Project Engineer',
        company: 'Evertz Microsystems Ltd.',
        details: 'test4'
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: 'Aug 2014 - Aug 2018',
        graduation: 'Electronic System Engineering (B.Eng)',
        university: 'Conestoga College',
        details: 'high gpa nice'
      }
    ]
  },
  portfolios: [
    {
      id: 1,
      title: 'Test 1',
      subtitle: 'TestTestTestTestTestTestTest',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://rashevskyi.com'
    },
    {
      id: 2,
      title: 'Test 2',
      subtitle: 'TestTestTestTestTestTestTest',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://rashevskyi.com'
    },
    {
      id: 3,
      title: 'Test 3',
      subtitle: 'TestTestTestTestTestTestTest',
      imageUrl: '/images/portfolio-image-1.jpg',
      url: '#'
    },
    {
      id: 4,
      title: 'Test 4',
      subtitle: 'TestTestTestTestTestTestTest',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg']
    }
  ]
};

// API calls
Mock.onGet('/api/information').reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply(config => {
  const response = database.contactInfo;
  return [200, response];
});

Mock.onGet('/api/skills').reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/experience').reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply(config => {
  const response = database.portfolios;
  return [200, response];
});
