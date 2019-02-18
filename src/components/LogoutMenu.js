import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ArrowDropDown';
import { setAuthUser } from '../actions/authedUser';

class LogoutMenu extends Component {

  state = {
    anchorElement: null
  }

  handleLogoutMenu = (event) => {
    this.setState({ anchorElement: event.currentTarget });
  }

  handleLogoutClose = () => {
    this.setState({ anchorElement: null });
  }

  handleLogout = () => {
    const { setAuthUser, history } = this.props;
    
    this.setState({ anchorElement: null });
    setAuthUser(null);
    history.push('/');
  }

  render() {
    const { anchorElement } = this.state;
    const logoutOpen = Boolean(anchorElement);

    return (
      <Fragment>
        <IconButton onClick={this.handleLogoutMenu}>
          <ArrowIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElement}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={logoutOpen}
          onClose={this.handleLogoutClose}
        >
          <MenuItem onClick={this.handleLogout}>Sign Out</MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return ({
    setAuthUser: (userID) => {
      dispatch(setAuthUser(userID));
    }
  });
}

export default withRouter(connect(null, mapDispatchToProps)(LogoutMenu));