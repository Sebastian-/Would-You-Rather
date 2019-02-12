import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from '../actions/types';

export default function questionReducer(state = {}, action) {
  switch(action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.userID])
          }
        }
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    default:
      return state;
  }
}