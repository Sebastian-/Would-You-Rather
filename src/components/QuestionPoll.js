import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  Card,
  CardHeader,
  Avatar,
  Typography,
  Divider,
  withStyles 
} from '@material-ui/core'
import PollForm from './PollForm'
import PollResults from './PollResults'


class QuestionPoll extends Component {

  render () {
    const { classes, id, answer, question } = this.props;

    if (question === null) {
      return <h3>{`404: Question not found at /question/${id}`}</h3>
    }

    const { optionOne, optionTwo, avatarURL, authorName } = question

    return (
      <Card className={classes.card}>
         <CardHeader
          className={classes.header}
          avatar={
            <Avatar src={avatarURL} className={classes.avatar}/>
          }
          title={answer
            ? <Typography variant="h4">{`Asked by ${authorName}`}</Typography>
            : <Typography variant="h4">{`${authorName} asks: `}</Typography>
          }
        />
        <Divider />
        {answer
          ? <PollResults
              answer={answer}
              optionOne={optionOne}
              optionTwo={optionTwo} />
          : <PollForm id={id} />}
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
    backgroundColor: theme.palette.primary.light
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
});

function mapStateToProps ({ questions, users, authedUser }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const answer = users[authedUser].answers[id] || ''
  
  return {
    id,
    answer,
    question: question 
      ? {
          optionOne: question.optionOne,
          optionTwo: question.optionTwo,
          avatarURL: users[question.author].avatarURL,
          authorName: users[question.author].name
        }
      : null
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionPoll))