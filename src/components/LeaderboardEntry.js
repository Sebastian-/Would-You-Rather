import React from 'react'
import {
  Paper,
  Avatar,
  Typography,
  withStyles
} from '@material-ui/core'

function LeaderboardEntry (props) {
  const { name, avatar, answered, asked, classes } = props

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.userAvatar} src={avatar} />
      <div className={classes.info}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{`Answered: ${answered} | Asked: ${asked}`}</Typography>
      </div>
      <div className={classes.score}>
        <Typography variant="h4">Score</Typography>
        <Avatar className={classes.scoreAvatar}>{answered + asked}</Avatar>
      </div>
    </Paper>
  )
}

const styles = theme => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    margin: 20
  },
  userAvatar: {
    margin: 15,
    width: 70,
    height: 70
  },
  info: {
    flexGrow: 1
  },
  score: {
    margin: 15,
    padding: '10px 10px 10px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeft: '1px solid grey'
  },
  scoreAvatar: {
    marginTop: 10,
    width: 50,
    height: 50
  }
})

export default withStyles(styles)(LeaderboardEntry)