import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div style={{margin: '0 auto', maxWidth: '1000px'}}>
        <Dashboard />
      </div>
    );
  }
}

export default connect()(App)
