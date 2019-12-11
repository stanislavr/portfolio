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
  }
};

// API calls
Mock.onGet('/api/information').reply(config => {
  const response = database.information;
  return [200, response];
});
