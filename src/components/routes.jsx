import React from 'react';

import App from './App';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

var routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    { path: 'about', component: About },
    { path: 'home', component: Home },
    { path: 'Contact', component: Contact },
    { path: '*', component: NotFound }
  ]
};