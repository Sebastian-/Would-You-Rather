import React from 'react';
import {
  Paper,
  Avatar,
  Typography,
  withStyles
} from '@material-ui/core';

function LeaderboardEntry (props) {
  const { name, avatar, answered, asked, classes } = props;

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
  );
}

const styles = theme => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    margin: 20,
    padding: theme.spacing.unit * 2
  },
  userAvatar: {
    width: 70,
    height: 70
  },
  info: {
    flexGrow: 1,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  score: {
    paddingLeft: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeft: `2px solid ${theme.palette.grey[400]}`
  },
  scoreAvatar: {
    marginTop: 10,
    width: 50,
    height: 50
  }
});

export default withStyles(styles)(LeaderboardEntry);