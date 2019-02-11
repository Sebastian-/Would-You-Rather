import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Paper,
  CardActions,
  Button,
  withStyles
} from '@material-ui/core'

/*
    TODO: This component will likely need an 'isAnswered' prop
*/

class QuestionCard extends Component {

  render () {
    const { classes, author, question, id } = this.props;

    return (
      <Card className={classes.card}>
         <CardHeader
          className={classes.header}
          avatar={
            <Avatar src={author.avatarURL} className={classes.avatar}/>
          }
          title={<Typography variant="h4">{`${author.name} asks: `}</Typography>}
          subheader={formatDate(question.timestamp)}
        />
        <Divider variant='middle' />
        <CardContent>
          <Typography variant="h5" className={classes.center}>
            Would You Rather . . .
          </Typography>
          <Paper className={classes.option}>
            <Typography variant="h6">
              {question.optionOne.text}
            </Typography>
          </Paper>
          <Paper className={classes.option}>
            <Typography variant="h6">
              {question.optionTwo.text}
            </Typography>
          </Paper>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/question/${id}`} className={classes.button}>
            Vote {/* TODO: Change to 'View Poll' if question has been answered */}
          </Button>
        </CardActions>
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
  option: {
    padding: 10,
    margin: 10
  },
  button: {
    width: '100%'
  }
});

// TODO: handle case where question doesn't exist
// TODO: limit question data to whatever is necessary for rendering (see chirper app)
function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  
  return {
    id,
    question,
    author
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionCard))