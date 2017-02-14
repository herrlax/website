import React from 'react';
import { Link } from 'react-router';

export default class NavigationMenu extends React.Component {

  render() {

      return(
          <div className='navigation'>
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
                  <Link key='contactMe' to='#contactMe' activeClassName="active">
                    Contact
                  </Link>
                </span>
              </span>
            </div>
          </div>
      );
  }
}
