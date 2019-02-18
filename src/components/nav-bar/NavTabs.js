import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  Tab
} from '@material-ui/core';

class NavTabs extends Component {

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { navOptions, disabled } = this.props;

    return (
      <Tabs value={value} onChange={this.handleChange}>
        {navOptions.map(({ path, name }) => (
          <Tab 
            key={path}
            component={Link}
            to={path}
            label={name}
            disabled={disabled}  
          />
        ))}
      </Tabs>
    );
  }
}

export default NavTabs;