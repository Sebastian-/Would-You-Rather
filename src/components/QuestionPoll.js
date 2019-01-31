import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  withStyles 
} from '@material-ui/core'


class QuestionPoll extends Component {

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
    const { classes, author, question } = this.props;

    return (
      <Card className={classes.card}>
         <CardHeader
          className={classes.header}
          avatar={
            <Avatar src={author.avatarURL} className={classes.avatar}/>
          }
          title={<Typography variant="h4">{`${author.name} asks: `}</Typography>}
        />
        <Divider />
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
                label={<Typography variant="h6">{question.optionOne.text}</Typography>}
              />
              <FormControlLabel 
                value="optionTwo" 
                control={<Radio />} 
                label={<Typography variant="h6">{question.optionTwo.text}</Typography>}
              />
            </RadioGroup>
            <Button className={classes.button} type='submit'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    )
  }

}

const styles = theme => ({ 
  card: {
    margin: 20
  },
  header: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#f7fdff'
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  center: {
    textAlign: 'center'
  },
  button: {
    width: '100%'
  }
});

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionPoll))