import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Icon from 'react-feather';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [emailProcessing, setEmailProcessing] = useState(false);

  // form completion checks
  const submitHandler = event => {
    event.preventDefault();
    if (!formdata.name) {
      setError(true);
      setMessage('Name is required');
    } else if (!formdata.email) {
      setError(true);
      setMessage('Email is required');
    } else if (!formdata.subject) {
      setError(true);
      setMessage('Subject is required');
    } else if (!formdata.message) {
      setError(true);
      setMessage('Message is required');
    } else if (emailProcessing) {
      setError(true);
      setMessage('Please wait, processing your email...');
    } else {
      setEmailProcessing(true);
      sendContactEmail(formdata);
    }
  };

  // handling any form changes
  const handleChange = event => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  // number formatting
  const numberFormatter = number => {
    const phnNumber = number;
    return phnNumber;
  };

  // handling alerts
  const handleAlerts = () => {
    if (error && message) {
      return <div className='alert alert-danger mt-4'>{message}</div>;
    } else if (!error && message) {
      return <div className='alert alert-success mt-4'>{message}</div>;
    } else {
      return null;
    }
  };

  // clearing contact form
  const clearFormdata = () => {
    setFormdata({ name: '', email: '', subject: '', message: '' });
  };

  // send an email to me
  const sendContactEmail = ({ name, email, subject, message }) => {
    // assign other emailJS variables
    const {
      REACT_APP_EMAILJS_SERVICEID: serviceID,
      REACT_APP_EMAILJS_TEMPLATEID: templateID,
      REACT_APP_EMAILJS_USERID: userID
    } = process.env;

    // send email using EmailJS api to my Mailgun box
    window.emailjs
      .send(
        serviceID,
        templateID,
        {
          name,
          email,
          subject,
          message
        },
        userID
      )
      // successfully sent this email
      .then(res => {
        setError(false);
        setMessage(
          'You email has been successfully sent! Thanks for contacting me :)'
        );
        // clear the contact form
        clearFormdata();
        setEmailProcessing(false);
      })
      // error handling
      .catch(err => {
        console.error('Failed to send email. Error: ', err);
        setError(true);
        setMessage(
          'Sorry, an error occured during your email submission! Feel free to contact me via email or LinkedIn :)'
        );
      });
  };

  // load up all contact information
  useEffect(() => {
    axios.get('/api/contactinfo').then(response => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  return (
    <Layout>
      <div className='mi-contact-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Contact Me' />
          <div className='row'>
            <div className='col-lg-6'>
              <div>
                <h4>Get In Touch</h4>
                <form
                  action='#'
                  className='mi-form mi-contact-form'
                  onSubmit={submitHandler}
                >
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-name'>Enter your name*</label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='name'
                      id='contact-form-name'
                      value={formdata.name}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-email'>
                      Enter your email*
                    </label>
                    <input
                      onChange={handleChange}
                      type='email'
                      name='email'
                      id='contact-form-email'
                      value={formdata.email}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-subject'>
                      Enter your subject*
                    </label>
                    <input
                      onChange={handleChange}
                      type='text'
                      name='subject'
                      id='contact-form-subject'
                      value={formdata.subject}
                    />
                  </div>
                  <div className='mi-form-field'>
                    <label htmlFor='contact-form-message'>
                      Enter your Message*
                    </label>
                    <textarea
                      onChange={handleChange}
                      name='message'
                      id='contact-form-message'
                      cols='30'
                      rows='6'
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className='mi-form-field'>
                    <button className='mi-button' type='submit'>
                      Send Mail
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-contact-info'>
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Phone />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Phone</h6>
                      {phoneNumbers.map(phoneNumber => (
                        <p key={phoneNumber}>
                          <a href={numberFormatter(phoneNumber)}>
                            {phoneNumber}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.Mail />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className='mi-contact-infoblock'>
                    <span className='mi-contact-infoblock-icon'>
                      <Icon.MapPin />
                    </span>
                    <div className='mi-contact-infoblock-content'>
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
