import React from 'react';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  withStyles,
} from '@material-ui/core';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import NavTabs from './NavTabs';
import NavMenu from './NavMenu';
import LogoutMenu from './LogoutMenu';

const navOptions = [
  {path: '/', name: 'Home'},
  {path: '/add', name: 'New Question'},
  {path: '/leaderboard', name: 'Leaderboard'},
];

const NavBar = (props) => {
  const { userName, avatar, classes } = props;
  const showNavTabs = useMediaQuery('(min-width:800px)');

  return (
    <AppBar>
      <Toolbar>
        {showNavTabs 
          ? <NavTabs navOptions={navOptions} />
          : <NavMenu disabled={!userName} navOptions={navOptions} />
        }
        <div className={classes.grow} />
        {userName ? 
          <div className={classes.userInfo}>
            <Typography variant='h5'>{userName}</Typography>
            <Avatar className={classes.avatar} src={avatar} />
            <LogoutMenu />
          </div>
          : null}
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  grow: {
    flexGrow: 1,
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