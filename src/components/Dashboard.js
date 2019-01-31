import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, List } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import QuestionCard from './QuestionCard';
import QuestionPoll from './QuestionPoll';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  }
});

class Dashboard extends Component {

  render () {
    const { classes, questionIDs } = this.props;

    return (
      <Paper className={classes.paper}>
        <List>
          {questionIDs.map((id) => (
            /* <ListItem key={id}>
              {`Question ID: ${id}`}
            </ListItem> */
            <QuestionPoll key={id} id={id} />
          ))}
        </List>
      </Paper>
    )
  }

}

function mapStateToProps ({ questions }) {
  return {
    questionIDs: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))