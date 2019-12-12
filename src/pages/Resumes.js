import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import Resume from '../components/Resume';

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  // get infromation about my skills and experience
  useEffect(() => {
    axios.get('/api/skills').then(response => {
      setSkills(response.data);
    });
    axios.get('/api/experience').then(response => {
      setWorkExperience(response.data.workExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <div className='mi-skills-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='My Skills' />
          <div className='mi-skills'>
            <div className='row mt-30-reverse'>
              {skills.map(skill => (
                <div once className='col-lg-4 mt-30' key={skill.title}>
                  <Skill title={skill.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mi-resume-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Resume' />
          <Smalltitle title='Work Experience' icon='briefcase' />
          <div className='mi-resume-wrapper'>
            {workExperience.map(workExp => (
              <Resume key={workExp.id} resumeData={workExp} />
            ))}
          </div>
          <div className='mt-30'></div>
          <Smalltitle title='Education' icon='book' />
          <div className='mi-resume-wrapper'>
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
