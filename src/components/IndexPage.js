import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import Footer from './Footer';

export default class IndexPage extends React.Component {

  render() {

    return (

        <div className='project-area'>
          <div className='project-area-label'>
            <p className='heading' id='portfoilio'>Portfoilio</p>
          </div>
          <div className='project-area-content'>
            {projects.map(p => <ProjectCard key={p.id} {...p} />)}
          </div>
          <Footer id='contactMe' />
        </div>
    );
  }
}
