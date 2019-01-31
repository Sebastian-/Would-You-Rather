import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Paper, List } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import QuestionPreview from './QuestionPreview';

const styles = theme => ({
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '10px'
  },
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
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <List>
            {questionIDs.map((id) => (
              /* <ListItem key={id}>
                {`Question ID: ${id}`}
              </ListItem> */
              <QuestionPreview key={id} id={id} />
            ))}
          </List>
        </Paper>
      </div>    
    )
  }

}

function mapStateToProps ({ questions }) {
  return {
    questionIDs: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))