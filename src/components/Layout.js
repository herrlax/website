import React from 'react';
import { Link } from 'react-router';
import NavMenu from './NavigationMenu';

export default class Layout extends React.Component {

  render() {

    return (

      <div className='app-container'>
        <NavMenu />
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}
