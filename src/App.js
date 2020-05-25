import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HttpsRedirect from 'react-https-redirect';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ContactPage from "./components/ContactPage/ContactPage";

import Navigation from "./components/Navigation/Navigation"



function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/contact' component={ContactPage} />

            <Route path='/mondrian' component={ContactPage} />
            <Route path='/showertune' component={ContactPage} />
            <Route path='/interview-tool' component={ProjectsPage} />
           
            <Route path='/amazon' component={ContactPage} />
            <Route path='/buzzfeed-news-offline-experience' component={ContactPage} />

          </Switch>
        </BrowserRouter>
      </div >
    </HttpsRedirect>
  );
}

export default App;
