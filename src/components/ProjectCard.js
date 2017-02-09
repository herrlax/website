import React from 'react';
import { Link } from 'react-router';

export default class ProjectCard extends React.Component {

  render() {

    // create style of card with custom background image
    const cardStyle = {
      'backgroundImage': 'url(img/' + `${this.props.thumbnail}` + ')',
      'background-size': '350px 350px',
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
      'display': 'flex',
      'display': 'inline-block',
      'flex-direction': 'column',
      'margin': '10px'
    };

    return (

      <Link to={`/project/${this.props.id}`}>
        <div style={cardStyle}>
          <div className='project-card-inner'>
            <div className='project-card-inner-name'>
              <p>{this.props.name}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
