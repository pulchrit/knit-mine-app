import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Component {...componentProps} />
          : <Redirect
          // Using redirect with an object that stores,
          // pathname to redirect to and the state where
          // the page was redirected from. 
          // https://reacttraining.com/react-router/web/example/auth-workflow
              to={{
                pathname: '/login',
                // This shows where the page is being redirected from.
                state: { from: componentProps.location } 
              }}
            />
      )}
    />
  )
}
