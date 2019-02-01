import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  CardContent,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  withStyles 
} from '@material-ui/core'


class PollForm extends Component {

  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.value)

    // TODO: dispatch to store
  }

  render () {
    const { classes, optionOne, optionTwo } = this.props;

    return (
      <CardContent>
        <Typography variant="h5" className={classes.center}>
          Would You Rather . . .
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            name="pollOptions"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel 
              value="optionOne" 
              control={<Radio />} 
              label={<Typography variant="h6">{optionOne}</Typography>}
            />
            <FormControlLabel 
              value="optionTwo" 
              control={<Radio />} 
              label={<Typography variant="h6">{optionTwo}</Typography>}
            />
          </RadioGroup>
          <Button className={classes.button} type='submit'>
            Submit
          </Button>
        </form>
      </CardContent>
    )
  }

}

const styles = theme => ({
  center: {
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
});

export default connect()(withStyles(styles)(PollForm))