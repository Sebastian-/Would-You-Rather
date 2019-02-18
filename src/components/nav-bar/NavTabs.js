import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  Tab
} from '@material-ui/core';

class NavTabs extends Component {

  render() {
    const { navOptions, disabled, location } = this.props;
    const value = navOptions
      .map((option) => (option.path))
      .indexOf(location.pathname);

    return (
      <Tabs value={value < 0 ? false : value} onChange={this.handleChange}>
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