import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {

  render() {

    return (

      <div className='app-container'>
        <div className='navigation-menu'>
          <Link to='/'>
            <h2>Mikael Malmqvist</h2>
          </Link>
        </div>
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}
