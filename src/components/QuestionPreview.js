import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, Avatar, CardContent, Typography, Divider, Paper, CardActions, Button } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { formatDate } from '../utils/helpers'

/*
    TODO: Refactor this component to render different card content depending on the route
      - if route is '/', render question options content
      - if route is '/question' and not answered render question poll content
      - if route is '/question' and answered render question results content
*/

class QuestionPreview extends Component {

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
          subheader={formatDate(question.timestamp)}
        />
        <Divider />
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
          <Button className={classes.button}>
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

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  const author = users[question.author]
  
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionPreview))