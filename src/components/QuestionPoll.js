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
    const { classes, author, question, answer, id } = this.props;

    return (
      <Card className={classes.card}>
         <CardHeader
          className={classes.header}
          avatar={
            <Avatar src={author.avatarURL} className={classes.avatar}/>
          }
          title={answer
            ? <Typography variant="h4">{`Asked by ${author.name}`}</Typography>
            : <Typography variant="h4">{`${author.name} asks: `}</Typography>
          }
        />
        <Divider />
        {answer
          ? <PollResults
              answer={answer}
              optionOne={question.optionOne}
              optionTwo={question.optionTwo} />
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


// TODO: handle case where question doesn't exist
// TODO: limit question data to whatever is necessary for rendering (see chirper app)
function mapStateToProps ({ questions, users, authedUser }, props) {
  const { id } = props.match.params
  const question = questions[id]
  const author = users[question.author]
  const answer = users[authedUser].answers[id] || ''
  
  return {
    id,
    question,
    author,
    answer
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionPoll))