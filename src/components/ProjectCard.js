import React from 'react';
import { Link } from 'react-router';

export default class ProjectCard extends React.Component {

  render() {

    return (

      <Link to={`/project/${this.props.id}`}>
        <div className='project-card'>
          <img src={`img/${this.props.thumbnail}`}/>
          <h4 className='name'>{this.props.name}</h4>
        </div>
      </Link>
    );
  }
}
