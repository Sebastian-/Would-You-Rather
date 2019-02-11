import React, { Component } from 'react'
import { 
  CardContent,
  Typography,
  Paper,
  withStyles 
} from '@material-ui/core'


class PollResults extends Component {

  render () {
    const { classes, optionOne, optionTwo, answer } = this.props;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length
    const optionOnePercent = Math.round((optionOne.votes.length/totalVotes) * 100)
    const optionTwoPercent = Math.round((optionTwo.votes.length/totalVotes) * 100)
    console.log(classes.selected)

    return (
      <CardContent>
        <Paper
          className={(answer === 'optionOne') ? classes.selected : classes.option}>
          <Typography variant='h6'>
            {`Would you rather ${optionOne.text}?`}
          </Typography>
          <div className={classes.voteBar}>
            <Typography variant='h5' className={classes.votePercent}>
              {`${optionOnePercent} %`}
            </Typography>
            <div 
              className={classes.voteBarFill} 
              style={{width: `${optionOnePercent}%`}} />
          </div>
          <Typography variant='h6' className={classes.center}>
            {`${optionOne.votes.length} out of ${totalVotes} votes`}
          </Typography>
        </Paper>
        <Paper
          className={(answer === 'optionTwo') ? classes.selected : classes.option}>
          <Typography variant='h6'>
            {`Would you rather ${optionTwo.text}?`}
          </Typography>
          <div className={classes.voteBar}>
            <Typography variant='h5' className={classes.votePercent}>
              {`${optionTwoPercent} %`}
            </Typography>
            <div 
              className={classes.voteBarFill} 
              style={{width: `${optionTwoPercent}%`}} />
          </div>
          <Typography variant='h6' className={classes.center}>
            {`${optionTwo.votes.length} out of ${totalVotes} votes`}
          </Typography>
        </Paper>
      </CardContent>
    )
  }

}

const styles = theme => ({
  center: {
    textAlign: 'center'
  },
  option: {
    padding: 10,
    margin: 10
  },
  voteBar: {
    padding: 5,
    margin: '10px 20px 5px 20px',
    backgroundColor: theme.palette.grey[400],
    position: 'relative',
    borderRadius: 5
  },
  voteBarFill: {
    backgroundColor: theme.palette.primary.dark,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 'inherit'
  },
  votePercent: {
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    zIndex: '1'
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
    border: `3px solid ${theme.palette.primary.main}`,
    padding: 10,
    margin: 10
  }
});

export default withStyles(styles)(PollResults)