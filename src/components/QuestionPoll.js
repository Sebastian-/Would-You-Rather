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


class QuestionPoll extends Component {

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
        <PollForm 
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text} />
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