import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Paper, List, Tab, Tabs } from '@material-ui/core'
import QuestionCard from './QuestionCard';

class Dashboard extends Component {

  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render () {
    const { answeredIDs, unansweredIDs } = this.props;

    return (
      <Fragment>
        <Paper square>
          <Tabs
            value={this.state.value}
            indicatorColor='primary'
            textColor='primary'
            onChange={this.handleChange}
            variant='fullWidth'
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
      </Fragment>
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

export default connect(mapStateToProps)(Dashboard)