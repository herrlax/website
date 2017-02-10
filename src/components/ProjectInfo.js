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

    let screenContent = null;
    let screenContent2 = null;
    let screenContent3 = null;

    // if no screens for tablets exist, create three with phones
    if(!project.tabletscreens) {
        screenContent = <div style={middleStyle}>
                          <img src={project.phonescreens[0]} className='pic-small'/>
                          <img src={project.phonescreens[1]} className='pic-medium'/>
                          <img src={project.phonescreens[2]} className='pic-small'/>
                        </div>

    } else { // create screens with a tablets and a phone
      screenContent = <div style={middleStyle}>
                        <img src={project.phonescreens[1]} className='pic-small'/>
                        <img src={project.tabletscreens[0]} className='pic-large'/>
                      </div>

      screenContent2 = <div style={middleStyle}>
                        <img src={project.phonescreens[0]} className='pic-small'/>
                        <img src={project.phonescreens[2]} className='pic-medium'/>
                        <img src={project.phonescreens[3]} className='pic-small'/>
                      </div>

      screenContent3 = <div style={middleStyle}>
                        <img src={project.phonescreens[5]} className='pic-small'/>
                        <img src={project.tabletscreens[2]} className='pic-large'/>
                      </div>
    }

    return (
      <div className='project-info-page'>

        <NavigationMenu />

        <div>

          <div style={topStyle}>
            <p className='heading-large'>{project.name}</p>
            <center>
              <div className='project-text'>{project.description}</div>
            </center>
          </div>

          {screenContent}

          <div style={bottomStyle}>
            <p className='heading-large'>My Part</p>
            <center>
              <div className='project-text'>{project.mypart}</div>
            </center>
          </div>

          {screenContent2}
          {screenContent3}
        </div>
      </div>
    );
  }
}
