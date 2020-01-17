import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Service from '../components/Service';

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);

  const handleToggler = event => {
    setToggler({
      toggler: event
    });
  };

  useEffect(() => {
    axios.get('/api/information').then(response => {
      setInformation(response.data);
    });
    axios.get('/api/services').then(response => {
      setServices(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='About Me' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mi-about-image'>
                <img
                  src={information.aboutImage}
                  alt='about'
                  onClick={() => handleToggler(!toggler)}
                />
                <span className='mi-about-image-icon'>
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-about-content'>
                <h3>
                  I am <span className='color-theme'>{information.name}</span>
                </h3>
                <p>{information.aboutMe}</p>

                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.age ? null : (
                    <li>
                      <b>Age</b> {information.age} Years
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>Phone</b> {information.phone}
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>Nationality</b> {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>Languages</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b> {information.email}
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>Freelance</b> {information.freelanceStatus}
                    </li>
                  )}
                  <br></br>
                  {!information.aboutMeFacts ? null : (
                    <div>
                      <b>Interesting Facts:</b>
                      <ul>
                        {information.aboutMeFacts.map(fact => (
                          <li>{' - ' + fact}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </ul>
                <a href={information.resumeFile} className='mi-button'>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mi-service-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='Services' />
          <div className='mi-service-wrapper'>
            <div className='row mt-30-reverse'>
              {services.map(service => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-30'
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
    </Layout>
  );
}

export default About;
