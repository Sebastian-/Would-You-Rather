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
  Button,
  withStyles
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock'
import { setAuthUser } from '../actions/authedUser'

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
    const { users, classes } = this.props

    return (
      <Paper className={classes.paper}>
        <Typography variant='h5'>Welcome to the Would You Rather App!</Typography>
        <Avatar className={classes.loginAvatar}>
          <LockIcon className={classes.loginIcon}/>
        </Avatar>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor='userID'>Select a User</InputLabel>
            <Select
              name='userID'
              value={this.state.userID}
              onChange={this.handleChange}
              classes={{
                select: classes.menuItem
              }}
            >
              {users.map((user) => (
                <MenuItem className={classes.menuItem} key={user.id} value={user.id}>
                  <Avatar src={user.avatar} />
                  <Typography>{user.name}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button fullWidth={true} type='submit'>Sign In</Button>
        </form>
      </Paper>
    )
  }
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    margin: 'auto',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  loginAvatar: {
    margin: theme.spacing.unit * 2,
    width: 150,
    height: 150
  },
  loginIcon: {
    width: 100,
    height: 100
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 125,
    justifyContent: 'space-evenly'
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    '& div': {
      marginRight: 20,
      marginLeft: 20
    },
    '& p': {
      flexBasis: '1'
    }
  }
})

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users).map((id) => ({
      id,
      name: users[id].name,
      avatar: users[id].avatarURL
    }))
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Login))