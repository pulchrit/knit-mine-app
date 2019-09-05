import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Login from './Login';
import Register from './Register';
import AddProjectPattern from './AddProjectPattern';
import AddStitch from './AddStitch';
import AddMyProject from './AddMyProject';
import ProjectsStitchesPatterns from './ProjectsStitchesPatterns';
//import StitchPatterns from './StitchPatterns';
import StitchItemDetails from './StitchItemDetails';
//import ProjectPatterns from './ProjectPatterns';
import ProjectPatternItemDetails from './ProjectPatternItemDetails';
//import MyProjectPatterns from './MyProjectPatterns';
import MyProjectPatternItemDetails from './MyProjectPatternItemDetails';
import PublicOnlyRoute from '../customRoutes/PublicOnlyRoute';
import PrivateRoute from '../customRoutes/PrivateRoute';
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

          <PublicOnlyRoute
            path={'/login'}
            component={Login}
          />

          <PublicOnlyRoute
            path={'/register'}
            component={Register}
          />

          <PrivateRoute 
            path={'/add-stitch'}
            component={AddStitch}
          />

          <PrivateRoute 
            path={'/add-project'}
            component={AddProjectPattern}
          />
          
          <PrivateRoute 
            path={'/add-my-project'}
            component={AddMyProject}
          />
          
          <PrivateRoute 
            exact
            path={'/stitch-patterns'}
            //component={StitchPatterns}
            component={ProjectsStitchesPatterns}
          />

         <PrivateRoute
            path={'/stitch-patterns/:id'}
            component={StitchItemDetails}
          />

          <PrivateRoute 
            exact
            path={'/project-patterns'}
            component={ProjectsStitchesPatterns}
            //component={ProjectPatterns}
          />

         <PrivateRoute
            path={'/project-patterns/:id'}
            component={ProjectPatternItemDetails}
          />

          <PrivateRoute 
            exact
            path={'/my-projects'}
            component={ProjectsStitchesPatterns}
            //component={MyProjectPatterns}
          />

         <PrivateRoute
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

