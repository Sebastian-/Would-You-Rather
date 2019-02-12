import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/API';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { ADD_ANSWER, ADD_QUESTION } from './types';

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      });
  };
}

function addAnswer (userID, qid, answer) {
  return {
    type: ADD_ANSWER,
    userID,
    qid,
    answer
  };
}

export function handleAddAnswer ({ qid, authedUser, answer }) {
  return (dispatch) => {
    return saveQuestionAnswer({ qid, authedUser, answer})
      .then(() => {
        dispatch(addAnswer(authedUser, qid, answer));
      });
  };
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)));
  };
}
