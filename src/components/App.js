import React from 'react'
import {Route, Switch} from 'react-router-dom'
import TokenService from '../services/token-service'
import Header from './Header'
import LandingPage from './LandingPage'
import Login from './Login'
import Register from './Register';
import AddProjectPattern from './AddProjectPattern'
import AddStitch from './AddStitch'
import AddMyProject from './AddMyProject'
import ProjectsStitchesPatterns from './ProjectsStitchesPatterns'
import StitchItemDetails from './StitchItemDetails'
import ProjectPatternItemDetails from './ProjectPatternItemDetails'
import MyProjectPatternItemDetails from './MyProjectPatternItemDetails'
import PrivateRoute from '../customRoutes/PrivateRoute'
import NotFoundPage from './NotFoundPage'
import Footer from './Footer'
import '../css/App.css'

export default class App extends React.Component {

  state = {
    accountName: TokenService.hasAuthToken() ? "My Account" : "Account"
  }

  changeAccountName = () => {
    this.setState({
      accountName: TokenService.hasAuthToken() ? "My Account" : "Account"
    })
  }

  render() {

    const {accountName} = this.state
  
    return (
      <main className="App">
        
        <Header 
          accountName={accountName}
          changeAccountName={this.changeAccountName} 
        />

        <Switch>
          <Route 
            exact
            path={'/'}
            component={LandingPage}
          />

          <Route
            path={'/login'}
            render={(props) => <Login {...props} changeAccountName={this.changeAccountName} />}
          />

          <Route
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
          />

         <PrivateRoute
            path={'/project-patterns/:id'}
            component={ProjectPatternItemDetails}
          />

          <PrivateRoute 
            exact
            path={'/my-projects'}
            component={ProjectsStitchesPatterns}
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

