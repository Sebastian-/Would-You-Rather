import React from 'react';
import { connect } from 'react-redux';
import { List, withStyles, Typography } from '@material-ui/core';
import LeaderboardEntry from './LeaderboardEntry';

const Leaderboard = (props) => {
  const { classes, scores } = props;

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
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

function mapStateToProps ({ users }) {
  
  const scores = Object.keys(users).map((userID) => {
    const user = users[userID];
    
    return {
      id: userID,
      name: user.name,
      avatar: user.avatarURL,
      asked: user.questions.length,
      answered: Object.keys(user.answers).length
    };
  });

  scores.sort((a, b) =>  (b.asked + b.answered) - (a.asked + a.answered));

  return {
    scores
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard));