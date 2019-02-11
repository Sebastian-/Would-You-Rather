import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, withStyles, Typography } from '@material-ui/core'
import LeaderboardEntry from './LeaderboardEntry';


class Leaderboard extends Component {

  render () {
    const { classes, scores } = this.props
    console.log(this.props)

    return (
      <div className={classes.container}>
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
      </div>
    )
  }
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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