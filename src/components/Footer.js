import React from 'react';
import { Link } from 'react-router';
//import FaIconPack from 'react-icons/lib/fa';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';

export default class Layout extends React.Component {
  render() {

    return (
      <div className='contact' id='contactMe'>
        <div className='contact-area'>
          <p className='heading'>Contact</p>
          <span className='contact-area-text'>
            <p>Hi there 👋</p>

            <p>My name is Mikael and I am a software engineer and an interaction designer in Stockholm, Sweden.
            I am currently finishing up my master degree in Interaction Design & Technologies,
            at Chalmers University of Technology, doing my master thesis in UX at Spotify. </p>

            <p>My area of expertise lies in Android development and Java, but I have also got experience in front-end
            development in Javascript, mostly using React.</p>

            <p>The easiest way to get in touch with me is via email, but you can also reach me via LinkedIn.
            If you are interested in code I write, check out my Github.</p>
            
            <div className='contact-area-text-links'>
              <div>
                <a href='mailto:mikael@malmqvist.it'
                      target='_blank'>
                  <FaEnvelope /> mikael@malmqvist.it
                </a>
              </div>
              <div>
                <a href='https://www.linkedin.com/in/mikael-malmqvist-579b70a9/'
                      target='_blank'>
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
              <div>
                <a href='https://github.com/herrlax'
                      target='_blank'>
                  <FaGithub /> Github
                </a>
              </div>
            </div>
          </span>
          </div>
          <img className='contact-area-img'
              src='img/Me.png' />
      </div>
    );
  }
}
