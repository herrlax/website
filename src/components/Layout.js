import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {

  render() {

    return (

      <div className='app-container'>
        <div className='navigation-menu'>
          <span className='navigation-menu-label'>
            <Link to='/'>
              Mikael Malmqvist
            </Link>
          </span>
          <span className='navigation-menu-links'>
            <span className='navigation-menu-links-item'>
              <Link key='portfoilio' to='#portfoilio' activeClassName="active">
                Portfoilio
              </Link>
            </span>
            <span className='navigation-menu-links-item'>
              <Link key='contact' to='#contact' activeClassName="active">
                Contact
              </Link>
            </span>
          </span>
        </div>
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}
