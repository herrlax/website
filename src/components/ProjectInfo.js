import React from 'react';
import { Link } from 'react-router';
import NotFound from './NotFound';
import NavigationMenu from './NavigationMenu';
import projects from '../data/projects';

export default class ProjectInfo extends React.Component {

  render() {

    const id = this.props.params.id;
    const project = projects.filter((p) => p.id === id)[0];

    // if the project doesn't exist, show 404 page..
    if (!p) {
      return <NotFound/>;
    }

    return (
      <div className='project-info-page'>

        <NavigationMenu />

        <div>
            information about {project.name} goes here..
          <div>
          </div>

          <div>
            pictures goes here..
          </div>

          <div>
            info about my part goes here..
          </div>
        </div>
      </div>
    );
  }
}
