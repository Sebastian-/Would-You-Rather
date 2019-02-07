import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  withStyles,
  Button
} from '@material-ui/core'


class NewQuestion extends Component {
  
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault()
    // TODO: implement adding a new question
  }

  render () {
    const { classes } = this.props

    return (
      <Paper className={classes.paper}>
        <Typography variant='h4' className={classes.center}>Create A New Question</Typography>
        <Divider variant='middle'/>
        <Typography variant='h5'>Would you rather . . .</Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            className={classes.textField}
            id="optionOne"
            label="First Option"
            value={this.state.optionOne}
            onChange={this.handleChange('optionOne')}
            required={true}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <Typography variant='h5'>?</Typography>
              </InputAdornment>,
            }}
          />
          <Typography variant='h5'>Or</Typography>
          <TextField
            className={classes.textField}
            id="optionTwo"
            label="Second Option"
            value={this.state.optionTwo}
            onChange={this.handleChange('optionTwo')}
            required={true}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <Typography variant='h5'>?</Typography>
              </InputAdornment>,
            }}
          />
          <Button className={classes.button} type='submit'>Post Question</Button>
        </form>
      </Paper>
    )
  }
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  center: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    width: '100%'
  },
  button: {
    width: '100%'
  }
});

export default connect()(withStyles(styles)(NewQuestion))