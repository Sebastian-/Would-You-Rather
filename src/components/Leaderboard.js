import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, List, withStyles, Typography } from '@material-ui/core'
import LeaderboardEntry from './LeaderboardEntry';


const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  }
});

class Leaderboard extends Component {

  render () {
    const { classes, scores } = this.props
    console.log(this.props)

    return (
      <Paper className={classes.paper}>
        <Typography variant='h3'>Leaderboard</Typography>
        <List>
          {scores.map(({ id, name, avatar, asked, answered }) => (
            <LeaderboardEntry
              key={id}
              name={name}
              avatar={avatar}
              asked={asked}
              answered={answered} />
          ))}
        </List>
      </Paper>
    )
  }

}

function mapStateToProps ({ users }) {
  
  const scores = Object.keys(users).map((userID) => {
    const user = users[userID]
    
    return {
      id: userID,
      name: user.name,
      avatar: user.avatarURL,
      asked: user.questions.length,
      answered: Object.keys(user.answers).length
    }
  })

  scores.sort((a, b) => (a.asked + a.answered) < (b.asked + b.answered))

  return {
    scores
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))