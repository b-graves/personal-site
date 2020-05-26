import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HttpsRedirect from 'react-https-redirect';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from "./components/HomePage/HomePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import ContactPage from "./components/ContactPage/ContactPage";

import Navigation from "./components/Navigation/Navigation"

import projects from "./data/projects.json"

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

            {projects.map(project =>
              <Route path={project.path}>
                <ProjectPage project={project} />
              </Route>
            )}

          </Switch>
        </BrowserRouter>
      </div >
    </HttpsRedirect>
  );
}

export default App;
