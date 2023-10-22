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
import GA from './utils/GoogleAnalytics'
import SmoothieMakerPage from './components/SmoothieMakerPage/SmoothieMakerPage';
import SmoothieMakerTexturePage from './components/SmoothieMakerPage/SmoothieMakerTexturePage';


function App() {
  return (
    <HttpsRedirect>
      <div className="App">
        <BrowserRouter>
          {GA.init() && <GA.RouteTracker />}

          <Navigation />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/contact' component={ContactPage} />
            <Route exact path='/art/smoothie-maker' component={SmoothieMakerPage} />
            <Route path='/art/smoothie-maker/texture' component={SmoothieMakerTexturePage} />
            {projects.map(project =>
              <Route path={"/project/" + project.id}>
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
