import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class NavMenu extends Component {

  state = {
    anchorElement: null
  }

  handleMenu = (event) => {
    this.setState({ anchorElement: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorElement: null });
  }

  render() {
    const { disabled, navOptions, classes } = this.props;
    const { anchorElement } = this.state;
    const navOpen = Boolean(anchorElement);

    return (
      <Fragment>
        <IconButton
          disabled={disabled}
          className={classes.menuButton}
          onClick={this.handleMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElement}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={navOpen}
          onClose={this.handleClose}
        >
          {navOptions.map(({ path, name }) => (
            <MenuItem key={path} component={Link} to={path} onClick={this.handleClose}>{name}</MenuItem>
          ))}
        </Menu>
      </Fragment>
    );
  }
}

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

export default withStyles(styles)(NavMenu);