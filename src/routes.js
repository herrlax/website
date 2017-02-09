import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Index from './components/Index';
import ProjectInfo from './components/ProjectInfo';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index}/>
    <Route path="project/:id" component={ProjectInfo}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;
