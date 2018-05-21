import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from '../page/App';
import Index from '../page/Index';
import Courses from '../page/Courses';
import CourseDetail from '../page/CourseDetail';
import Paths from '../page/Paths';
import Questions from '../page/Questions';
import QuestionsDetail from '../page/QuestionsDetail';



import PageNotFound from '../page/404page';

export default (
  <Router history={hashHistory} >
    <Route component={App} path="/">
      <IndexRedirect to="index"/>
      <Route component={Index} path="/index" />
      <Route component={Courses} path="/courses" />
      <Route component={CourseDetail} path="/course/:id" />
      <Route component={Paths} path="/paths" />
      <Route component={Questions} path="/questions" />
      <Route component={QuestionsDetail} path="/questions/:id" />      
      <Route path="*" component={PageNotFound}></Route>
    </Route>
  </Router>
);