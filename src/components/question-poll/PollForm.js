import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CardContent,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  withStyles 
} from '@material-ui/core';
import { handleAddAnswer } from '../../actions/shared';


class PollForm extends Component {

  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { value } = this.state;
    const { authedUser, id, addAnswer } = this.props;

    addAnswer(id, value, authedUser);
  }

  render () {
    const { classes, optionOne, optionTwo } = this.props;
    const { value } = this.state;

    return (
      <CardContent>
        <Typography variant="h5" className={classes.center}>
          Would You Rather . . .
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            name="pollOptions"
            value={value}
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
          <Button 
            className={classes.button}
            disabled={value === ''}
            type='submit'
          >
            Submit
          </Button>
        </form>
      </CardContent>
    );
  }

}

const styles = {
  center: {
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
};

function mapDispatchToProps (dispatch) {
  return ({
    addAnswer: (qid, answer, authedUser) => {
      dispatch(handleAddAnswer({
        qid,
        answer,
        authedUser,
      }));
    }
  });
}

function mapStateToProps ({ questions, authedUser }, { id }) {
  return {
    authedUser: authedUser,
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PollForm));