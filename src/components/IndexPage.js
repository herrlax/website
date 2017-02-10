import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import Footer from './Footer';

export default class IndexPage extends React.Component {

  render() {

    return (

        <div className='project-area'>
          <div className='project-area-label'>
            <p className='heading'>Portfoilio</p>
          </div>
          {projects.map(p => <ProjectCard key={p.id} {...p} />)}
          <Footer />
        </div>
    );
  }
}
