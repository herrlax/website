import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default class IndexPage extends React.Component {

  render() {

    return (

      <div className="project-area">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    );
  }
}
