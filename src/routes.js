import React from 'react';
import { Route } from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={App}>
        <Route path ="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </Route>
);