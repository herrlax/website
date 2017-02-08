import React from 'react';
import { Link } from 'react-router'

export default class NavigationMenu extends React.Component {

  render() {

      return(
        <nav className='navigation-menu'>
          <Link key='portfoilio' to='#portfoilio' activeClassName="active">
            Portfoilio
          </Link>
          <Link key='contact' to='#contact' activeClassName="active">
            Contact
          </Link>
        </nav>
      );
  }
}
