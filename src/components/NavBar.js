import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

class NavBar extends Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }
  
  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { userName, avatar } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <AppBar>
        <Toolbar>
          <div>
            <IconButton onClick={this.handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Home</MenuItem>
              <MenuItem onClick={this.handleClose}>New Question</MenuItem>
              <MenuItem onClick={this.handleClose}>Leaderboard</MenuItem>
            </Menu>
          </div>
          <Avatar src={avatar} />
          <Typography variant='h5'>{userName}</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  const user = users[authedUser]

  return {
    userName: user.name,
    avatar: user.avatarURL
  }
}

export default connect(mapStateToProps)(NavBar)