import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowIcon from '@material-ui/icons/ArrowDropDown';
import { setAuthUser } from '../actions/authedUser';

class NavBar extends Component {
  state = {
    navAnchor: null,
    logoutAnchor: null
  }

  handleNavMenu = event => {
    this.setState({ navAnchor: event.currentTarget });
  }

  handleLogoutMenu = (event) => {
    this.setState({ logoutAnchor: event.currentTarget });
  }
  
  handleNavClose = () => {
    this.setState({ navAnchor: null });
  }

  handleLogoutClose = () => {
    this.setState({ logoutAnchor: null });
  }

  handleLogout = () => {
    this.setState({ logoutAnchor: null });
    this.props.dispatch(setAuthUser(null));
    this.props.history.push('/');
  }

  render() {
    const { userName, avatar, classes } = this.props;
    const { navAnchor, logoutAnchor } = this.state;
    const navOpen = Boolean(navAnchor);
    const logoutOpen = Boolean(logoutAnchor);

    return (
      <AppBar>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={this.handleNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={navAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={navOpen}
            onClose={this.handleNavClose}
          >
            <Link to='/'><MenuItem onClick={this.handleNavClose}>Home</MenuItem></Link>
            <Link to='/add'><MenuItem onClick={this.handleNavClose}>New Question</MenuItem></Link>
            <Link to='/leaderboard'><MenuItem onClick={this.handleNavClose}>Leaderboard</MenuItem></Link>
          </Menu>
          <div className={classes.grow} />
          {userName ? 
            <div className={classes.userInfo}>
              <Typography variant='h5'>{userName}</Typography>
              <Avatar className={classes.avatar} src={avatar} />
              <IconButton onClick={this.handleLogoutMenu}>
                <ArrowIcon />
              </IconButton>
              <Menu
                anchorEl={logoutAnchor}
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
            </div>
            : null}
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    marginLeft: 10,
    marginRight: 10
  }
};

function mapStateToProps ({ users, authedUser }) {
  const user = users[authedUser];

  return user
    ? {
      userName: user.name,
      avatar: user.avatarURL
    }
    : {};
}

export default withStyles(styles)(connect(mapStateToProps)(NavBar));