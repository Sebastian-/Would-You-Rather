import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate, formatQuestion } from '../utils/helpers';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Divider,
  Paper,
  CardActions,
  Button,
  withStyles
} from '@material-ui/core';

const QuestionCard = (props) => {
  const { classes, question, isAnswered, id } = props;
  const { timestamp, optionOneText, optionTwoText, avatarURL, authorName } = question;
  
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar src={avatarURL} className={classes.avatar}/>
        }
        title={<Typography variant="h4">{`${authorName} asks: `}</Typography>}
        subheader={formatDate(timestamp)}
      />
      <Divider variant='middle' />
      <CardContent>
        <Typography variant="h5" className={classes.center}>
          Would You Rather . . .
        </Typography>
        <Paper className={classes.option}>
          <Typography variant="h6">
            {optionOneText}
          </Typography>
        </Paper>
        <Paper className={classes.option}>
          <Typography variant="h6">
            {optionTwoText}
          </Typography>
        </Paper>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/question/${id}`} className={classes.button}>
          {isAnswered ? 'View Poll' : 'Vote'}
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = theme => ({ 
  card: {
    marginTop: theme.spacing.unit
  },
  header: {
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.palette.primary.light
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  center: {
    textAlign: 'center'
  },
  option: {
    padding: 10,
    margin: 10
  },
  button: {
    width: '100%'
  }
});

function mapStateToProps ({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const currentUser = users[authedUser];
  
  return {
    id,
    question: question ? formatQuestion(question, author) : null,
    isAnswered: currentUser.answers.hasOwnProperty(id)
  };
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionCard));