import Mock from '../mock';

// my info
const database = {
  information: {
    name: 'Stanislav Rashevskyi',
    aboutContent: 'Software Developer. Excellent Team Player. Quick Learner.',
    aboutMe:
      'Results-oriented software developer comfortable working in a fast-paced environment under minimum supervision. Excellent team player with a positive attitude and strong communication skills. Always eager to quickly learn and use new concepts.',
    aboutMeFacts: [
      'I love Dungeons and Dragons, Chess, Boxing, Tennis, and Snowboarding',
      'In 2019 had a trip to Chernobyl',
      'Been a captain of high school basketball team for three years'
    ],
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
    aboutImage: '/images/about-image-sm.jpg',
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
      title: 'Sass'
    },
    {
      title: 'JavaScript ES6'
    },
    {
      title: 'React'
    },
    {
      title: 'Context + Hooks, Redux'
    },

    {
      title: 'Node.js, Express'
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
      title: 'C/C++'
    },
    {
      title: 'Bash'
    },
    {
      title: 'Linux/Unix terminal'
    },
    {
      title: 'Agile (JIRA)'
    },
    {
      title: 'Googling'
    }
  ],
  experience: {
    workExperience: [
      {
        id: 1,
        year: 'Aug 2018 - Present',
        position: 'Project Engineer',
        company: 'Evertz Microsystems Ltd.',
        details: [
          'Worked in a team to build a complex MAM/Playout system for an international TV network',
          'Designed and edited automation scripts (JavaScript, Python)',
          'Wrote efficient queries for massive databases (SQL)',
          "Managed a team of 6 during team lead's absences",
          'Investigated and fixed over 200 client’s issues within tight deadlines',
          'Documented system design and deployment process in Confluence',
          'Provided post business hours’ assistance to resolve critical on-air problems',
          'Travelled to customer sites during the project lifecycle to deploy broadcast systems',
          'Wrote an Introduction Manual that was completed by over 20 new hires in my department',
          'Mentored new engineers and students',
          'Worked successfully in Agile environment'
        ]
      },
      {
        id: 2,
        year: 'Sep 2017 - Dec 2017',
        position: 'Web/Mobile App Developer (Co-Op)',
        company: 'Syngli Inc. (https://syngli.com)',
        details: [
          'Worked on back-end and front-end of web learning platform',
          'Integrated new content scheduling algorithm based on spaced-repetition model of learning (PHP, SQL)',
          'Designed efficient solution to check content validity implemented on a current website (PHP, SQL)',
          'Upgraded User Interface of 10+ website pages (HTML, CSS, JavaScript, jQuery, Bootstrap)',
          'Included feature to survey visitor content interests'
        ]
      },
      {
        id: 3,
        year: 'Jan 2017 - May 2018',
        position: 'Student Software Developer',
        company: 'BlackBerry QNX',
        details: [
          'Fixed C bugs, analyzed kernel crashes, updated utilities and drivers for QNX 6.5/6.6/7.0 releases',
          'Collaborated with several development teams to close 20+ high-end problems and consulting questions',
          'Provided Tier 3 Support for QNX critical automotive customers'
        ]
      },
      {
        id: 4,
        year: 'May 2016 - Sep 2016',
        position: 'Student Software Developer',
        company: 'BlackBerry QNX',
        details: [
          'Discovered and fixed existing C source code bugs in QNX 6.5/6.6',
          'Interacted with customers to resolve 45+ OS issues',
          'Provided Tier 2 and 3 Support for key QNX engineering clients',
          'Learned fundamentals of QNX real-time operating system in one month'
        ]
      },
      {
        id: 5,
        year: 'May 2015 - Sep 2015',
        position: 'Software and Hardware Engineer (Co-Op)',
        company: 'Balute Inc.',
        details: [
          'Designed and created new 15-page GUI for musical app using QT (C++)',
          'Worked on firmware updates for future products (C)',
          'Designed and tested PCB for a digital Ukulele',
          'Created and maintained multipoint database for over 100 items'
        ]
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: 'Aug 2014 - Aug 2018',
        graduation: 'Electronic System Engineering (B.Eng)',
        university: 'Conestoga College',
        details: [
          'Graduated with Distinction',
          'GPA 3.63/4.00',
          'Air Hockey Robot (Capstone) – Best Final Year Project Award 2018',
          'Received COM DEV Degree Entrance Scholarship 2015'
        ]
      }
    ]
  },
  portfolios: [
    {
      id: 1,
      title: 'Portfolio Website',
      subtitle:
        'Designed my portfolio website using React, JavaScript ES6, HTML5/CSS3, Sass, and more.',
      imageUrl: '/images/portfolio-sm.png',
      url: 'https://rashevskyi.com',
      github: 'https://github.com/stanislavr/portfolio'
    },
    {
      id: 2,
      title: 'Contact Keeper',
      subtitle:
        'Created a full-stack MERN application that allows to manage business and personal contacts. Front-end uses Context API with Hooks. Back-end RESTful API uses JWT for authentication.',
      imageUrl: '/images/contact-keeper-sm.png',
      url: 'https://radiant-peak-35615.herokuapp.com/',
      github: 'https://github.com/stanislavr/ContactKeeper'
    },
    {
      id: 3,
      title: 'Air Hockey Robot',
      subtitle:
        'In a team of three designed a high-speed robot capable of autonomously playing air hockey against a human player. In 2018 received Mastercraft Award for the best final year project at Conestoga College. ',
      imageUrl: '/images/airhockey-robot-sm.png',
      largeImageUrl: ['/images/airhockey-robot-lg.png'],
      url: 'https://www.youtube.com/watch?v=_rkQ520cwXE',
      github: 'https://github.com/tabdallah/capstone'
    },
    {
      id: 4,
      title: 'Syngli.com',
      subtitle:
        'Worked as a full-stack developer of a web learning platform (HTML/CSS, JavaScript, PHP, Python, MySQL). Integrated new content scheduling algorithm based on spaced-repetition model of learning. Implemented efficient solution to check content validity. Upgraded User Interface and added features on more than 10 website pages.',
      imageUrl: '/images/syngli-sm.png',
      url: 'https://syngli.com/'
    },
    {
      id: 5,
      title: 'IT Logger',
      subtitle:
        'Developed a one-page app to manage IT tickets. Front-end uses HTML5/CSS3 (based on Materialize), JavaScript ES6, and React with Redux. JSON-Server is used to simulate a Back-end API.',
      imageUrl: '/images/it-logger-sm.png',
      largeImageUrl: ['/images/it-logger-lg.png'],
      github: 'https://github.com/stanislavr/ITLogger'
    },
    {
      id: 6,
      title: 'GitHub Finder',
      subtitle:
        'Created React app to search for GitHub users. It is implemented using HTML5/CSS3, JavaScript ES6, ReactJS (Context API with Hooks), and GitHub API.',
      imageUrl: '/images/github-finder-sm.png',
      url: 'https://githubfinderv2.netlify.com/',
      github: 'https://github.com/stanislavr/GithubFinder-React'
    }
  ],
  services: [
    {
      title: 'Software Development',
      icon: 'code',
      details:
        'Years of experience developing various software products: Full Stack Web, Optimization Algorithms, Scripts, UI, Embedded, etc.'
    },
    {
      title: 'Front-end Development',
      icon: 'code-alt',
      details:
        'Comfortable designing front-end using HTML5/CSS3, Sass, JavaScript ES6, React (Context + Hooks, Redux), and more.'
    },
    {
      title: 'Back-end Development',
      icon: 'database',
      details:
        'Knowledge of server side development using Node.js, Express, MongoDB, SQL, ...'
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

Mock.onGet('/api/services').reply(config => {
  const response = database.services;
  return [200, response];
});
