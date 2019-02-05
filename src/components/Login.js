import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'

// TODO: implement form control state, dispatch user login

class Login extends Component {
  
  render () {
    const { users } = this.props

    return (
      <Paper>
        <Typography>Welcome to the Would You Rather App!</Typography>
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography>Sign In</Typography>
        <FormControl required fullWidth={true}>
          <InputLabel htmlFor='user'>User</InputLabel>
          <Select
            name='user'>
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                <Avatar src={user.avatar} />
                <Typography>{user.name}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users).map((id) => ({
      id,
      name: users[id].name,
      avatar: users[id].avatarURL
    }))
  }
}

export default connect(mapStateToProps)(Login)