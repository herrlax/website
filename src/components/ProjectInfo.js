import React from 'react';
import { Link } from 'react-router';
import NotFound from './NotFound';
import NavigationMenu from './NavigationMenu';
import projects from '../data/projects';
import FaGithub from 'react-icons/lib/fa/github';

export default class ProjectInfo extends React.Component {

  render() {

    const id = this.props.params.id;
    const project = projects.filter((p) => p.id === id)[0];

    // if the project doesn't exist, show 404 page..
    if (!project) {
      return <NotFound/>;
    }

    const topStyle = {
      'backgroundImage': 'linear-gradient(-135deg, #' + `${project.gradientStart}` + ' 0%, #' + `${project.gradientEnd}` + ' 100%)',
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'display': 'flex',
      'text-align': 'center',
      'color': '#fff'
    };

    const bottomStyle = {
      'backgroundImage': 'linear-gradient(-135deg, #' + `${project.gradientStart}` + ' 0%, #' + `${project.gradientEnd}` + ' 100%)',
      'background-size': '100% 100%',
      'background-repeat': 'no-repeat',
      'display': 'flex',
      'text-align': 'center',
      'color': '#fff'
    };

    const middleStyle = {
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto'
    };

    const githubLinkStyle = {
      'font-weight': 'bold',
      'text-align': 'center',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'margin-bottom': '50px'
    };

    let screenContent = null;
    let screenContent2 = null;
    let screenContent3 = null;

    screenContent = <div style={middleStyle}>
                      <img src={project.phonescreens[0]} className='pic-small'/>
                      <img src={project.phonescreens[1]} className='pic-medium'/>
                      <img src={project.phonescreens[2]} className='pic-small'/>
                    </div>

    if(project.phonescreensLandscape) {
      screenContent2 =  <div style={middleStyle}>
                          <img src={project.phonescreens[3]} className='pic-medium'/>
                          <img src={project.phonescreensLandscape[0]} className='pic-large'/>
                        </div>
    } else if (project.tabletscreens) { // create screens with a tablets and a phone
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
    } else {
      screenContent2 = <div style={middleStyle}>
                        <img src={project.phonescreens[3]} className='pic-small'/>
                        <img src={project.phonescreens[4]} className='pic-medium'/>
                        <img src={project.phonescreens[5]} className='pic-small'/>
                      </div>

      screenContent3 = <div style={middleStyle}>
                        <img src={project.phonescreens[6]} className='pic-medium'/>
                        <img src={project.phonescreens[7]} className='pic-medium'/>
                      </div>
    }

    let githubLink = project.link.type == 'github'
                ?  <div style={githubLinkStyle}>
                      <span>Check it out on </span>
                      <a href={project.link.link}
                            target='_blank'>
                        <FaGithub /> Github
                      </a>
                    </div>
                : <div></div>;

    return (
      <div>

        <NavigationMenu />

        <div>

          <div style={topStyle}>
            <div className='project-info'>
              <div className='heading-large'>{project.name}</div>
                <center>
                  <div className='project-info-text'>{project.description}</div>
                </center>
            </div>
          </div>

          {screenContent}

          <div style={bottomStyle}>
            <div className='project-info'>
              <div className='heading-large'>My Part</div>
              <center>
                <div className='project-info-text'>{project.mypart}</div>
              </center>
            </div>
          </div>
          {screenContent2}
          {screenContent3}
          {githubLink}
        </div>
      </div>
    );
  }
}
