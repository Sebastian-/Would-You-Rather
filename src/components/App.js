import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { withStyles, CssBaseline } from '@material-ui/core';
import Dashboard from './dashboard/Dashboard';
import Leaderboard from './leaderboard/Leaderboard';
import NewQuestion from './NewQuestion';
import Login from './Login';
import NavBar from './nav-bar/NavBar';
import QuestionPoll from './question-poll/QuestionPoll';
import PrivateRoute from './util/PrivateRoute';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Route component={NavBar} />
        <div className={this.props.classes.container}>
          <Switch>
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/add' component={NewQuestion} />
            <PrivateRoute path='/question/:id' component={QuestionPoll} />
            <PrivateRoute path='/leaderboard' component={Leaderboard} />
            <Route component={({ location }) => 
              <h3>{`404: Nothing found at ${location.pathname}`}</h3>}
            />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

const styles = (theme) => ({
  container: {
    margin: '64px auto 0px auto',
    maxWidth:'800px',
    padding: theme.spacing.unit
  }
});

export default withRouter(withStyles(styles)(connect()(App)));
