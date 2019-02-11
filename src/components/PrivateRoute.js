import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated 
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }} 
          />)
      }
    />
)}


function mapStateToProps ({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null
  }
}

export default connect(mapStateToProps)(PrivateRoute)