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
    const optionOnePercent = (optionOne.votes.length/totalVotes) * 100
    const optionTwoPercent = (optionTwo.votes.length/totalVotes) * 100

    return (
      <CardContent>
        <Paper
          className={classes.option}
          style={(answer === 'optionOne') ? {backgroundColor: '#b2dfdb', border: '5px solid black'} : {}}>
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
          className={classes.option}
          style={(answer === 'optionTwo') ? {backgroundColor: '#b2dfdb', border: '5px solid black'} : {}}>
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: '#b4b9bd',
    position: 'relative',
    borderRadius: 5
  },
  voteBarFill: {
    backgroundColor: '#307699',
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
  }
});

export default withStyles(styles)(PollResults)