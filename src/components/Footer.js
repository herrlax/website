import React from 'react';
import { Link } from 'react-router';
//import FaIconPack from 'react-icons/lib/fa';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaEnvelope from 'react-icons/lib/fa/envelope';

export default class Layout extends React.Component {
  render() {

    return (
      <div className='contact' id='contact'>
        <div className='contact-area'>
          <p className='heading'>Contact</p>
          <span className='contact-area-text'>
            <p>The easiest way to get in touch with me is via email, but you can also reach me via LinkedIn</p>
            <div className='contact-area-text-links'>
              <div>
                <Link key='email' to='mailto:mikael@malmqvist.it' activeClassName="active">
                  <FaEnvelope /> mikael@malmqvist.it
                </Link>
              </div>
              <div>
                <Link key='linkedin' to='https://www.linkedin.com/in/mikael-malmqvist-579b70a9/' activeClassName="active">
                  <FaLinkedin /> LinkedIn
                </Link>
              </div>
              <div>
                <Link key='github' to='https://github.com/herrlax' activeClassName="active">
                  <FaGithub /> Github
                </Link>
              </div>
            </div>
          </span>
          </div>
          <img className='contact-area-img'
              src='https://d13yacurqjgara.cloudfront.net/users/42659/screenshots/3280436/cs_lewis__illustration_-01.png' />
      </div>
    );
  }
}
