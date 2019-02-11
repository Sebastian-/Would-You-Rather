import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import NavBar from './NavBar'
import QuestionPoll from './QuestionPoll'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <div style={{margin: '0 auto'}}>
          <Route component={NavBar} />
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/add' component={NewQuestion} />
            <PrivateRoute path='/question/:id' component={QuestionPoll} />
            <PrivateRoute path='/leaderboard' component={Leaderboard} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(connect()(App))
