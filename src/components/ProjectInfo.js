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
    if (!project) {
      return <NotFound/>;
    }

    const topStyle = {
      'backgroundImage': 'url(/img/' + `${project.top}` + ')',
      'width': '100%',
      'height': '400px',
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
      'display': 'flex',
      'text-align': 'center',
      'color': '#fff',
      'display': 'inline-block',
      'flex-direction': 'column'
    };

    const bottomStyle = {
      'backgroundImage': 'url(/img/' + `${project.top}` + ')',
      'width': '100%',
      'height': '400px',
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
      'display': 'flex',
      'text-align': 'center',
      'color': '#fff',
      'display': 'inline-block',
      'flex-direction': 'column'
    };

    const middleStyle = {
      'text-align': 'center'
    };

    return (
      <div className='project-info-page'>

        <NavigationMenu />

        <div>

          <div style={topStyle}>
            <p className='heading'>{project.name}</p>
            <center>
              <div className='project-text'>{project.description}</div>
            </center>
          </div>

          <div style={middleStyle}>
            <img src={project.screens[0]} className='pic-small'/>
            <img src={project.screens[1]} className='pic-medium'/>
            <img src={project.screens[2]} className='pic-small'/>
          </div>

          <div style={bottomStyle}>
            <p className='heading'>My Part</p>
            <center>
              <div className='project-text'>{project.mypart}</div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
