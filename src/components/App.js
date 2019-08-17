import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import AddProjectPattern from './AddProjectPattern';
import AddStitch from './AddStitch';
import AddMyProject from './AddMyProject';
import StitchPatterns from './StitchPatterns';
import StitchItemDetails from './StitchItemDetails';
import ProjectPatterns from './ProjectPatterns';
import ProjectPatternItemDetails from './ProjectPatternItemDetails';
import MyProjectPatterns from './MyProjectPatterns';
import MyProjectPatternItemDetails from './MyProjectPatternItemDetails';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import '../css/App.css';

export default class App extends React.Component {
  render() {
  
    return (
      <main className="App">
        
        <Header />

        <Switch>
          <Route 
            exact
            path={'/'}
            component={LandingPage}
          />

          <Route
            path={'/login'}
            component={Login}
          />

          <Route
            path={'/register'}
            component={Register}
          />

          <Route 
            path={'/add-stitch'}
            component={AddStitch}
          />

          <Route 
            path={'/add-project'}
            component={AddProjectPattern}
          />
          
          <Route 
            path={'/add-my-project'}
            component={AddMyProject}
          />
          
          <Route 
            exact
            path={'/stitch-patterns'}
            component={StitchPatterns}
          />

         <Route
            path={'/stitch-patterns/:id'}
            component={StitchItemDetails}
          />

          <Route 
            exact
            path={'/project-patterns'}
            component={ProjectPatterns}
          />

         <Route
            path={'/project-patterns/:id'}
            component={ProjectPatternItemDetails}
          />

          <Route 
            exact
            path={'/my-projects'}
            component={MyProjectPatterns}
          />

         <Route
            path={'/my-projects/:id'}
            component={MyProjectPatternItemDetails}
          />

          <Route 
            component={NotFoundPage}
          />

        </Switch>

        <Footer />
        
      </main>
    );
  }
}

