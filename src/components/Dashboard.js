import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, List, Tab, Tabs } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import QuestionCard from './QuestionCard';
import QuestionPoll from './QuestionPoll';

/*
  TODO: style the ans/unanswered tab, make this component less wide
*/

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

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render () {
    const { classes, answeredIDs, unansweredIDs } = this.props;

    return (
      <Paper className={classes.paper}>
        <Paper square>
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            <Tab label="Unanswered" />
            <Tab label="Answered" />
          </Tabs>
        </Paper>
        <List>
          {(this.state.value === 0 
            ? unansweredIDs 
            : answeredIDs).map((id) => (
            <QuestionCard key={id} id={id} />
          ))}
        </List>
      </Paper>
    )
  }

}

function mapStateToProps ({ questions, authedUser }) {
  const IDs = {
    answeredIDs: [],
    unansweredIDs: []
  }

  Object.keys(questions)
    .sort((a, b) => (questions[a].timestamp < questions[b].timestamp))
    .reduce((acc, id) => {
      if (
        questions[id].optionOne.votes.indexOf(authedUser) !== -1 
        || questions[id].optionTwo.votes.indexOf(authedUser) !== -1
      ) {
        acc.answeredIDs.push(id)
      } else {
        acc.unansweredIDs.push(id)
      }
      return acc
    }, IDs)

  return IDs
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))