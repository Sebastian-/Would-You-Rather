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
import { handleQuestionResponse } from '../actions/shared';


class PollForm extends Component {

  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault()
    const { value } = this.state
    const { authedUser, id, dispatch } = this.props

    if (value === '')
      return
    else
      dispatch(handleQuestionResponse({
        qid: id,
        answer: value,
        authedUser,
      }))
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

function mapStateToProps ({ questions, authedUser }, {id}) {
  return {
    authedUser: authedUser,
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text
  }
}

export default connect(mapStateToProps)(withStyles(styles)(PollForm))