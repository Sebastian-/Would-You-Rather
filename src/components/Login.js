import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { setAuthUser } from '../actions/authedUser';

class Login extends Component {
  state = {
    userID: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { userID } = this.state

    if (userID === '') 
      return
    else
      this.props.dispatch(setAuthUser(userID))
  }
  
  render () {
    const { users } = this.props

    return (
      <Paper>
        <Typography>Welcome to the Would You Rather App!</Typography>
        <Avatar>
          <LockIcon />
        </Avatar>
        <Typography>Sign In</Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl required fullWidth={true}>
            <InputLabel htmlFor='user'>User</InputLabel>
            <Select
              name='userID'
              value={this.state.userID}
              onChange={this.handleChange}
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  <Avatar src={user.avatar} />
                  <Typography>{user.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type='submit'>Sign In</Button>
        </form>
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