import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Particles from 'react-particles-js';

import Socialicons from '../components/Socialicons';
import Layout from '../components/Layout';

function Home() {
  const [information, setInformation] = useState('');

  // load information text
  useEffect(() => {
    axios.get('/api/information').then(res => {
      setInformation(res.data);
    });
  }, []);

  return (
    <Layout>
      <div className='mi-home-area mi-padding-section'>
        <Particles className='mi-home-particle' params={particlesConfig} />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10 col-12'>
              <div className='mi-home-content'>
                <h1>Hello, World! </h1>
                <h1>
                  I am <span className='color-theme'>{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// this config is used to animate small particles (bubbles) flying around
const particlesConfig = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false
      }
    },
    color: {
      value: '#b72222'
    },
    opacity: {
      value: 0.1
    },
    size: {
      value: 7,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: 'top',
      out_mode: 'out'
    }
  }
};

export default Home;
