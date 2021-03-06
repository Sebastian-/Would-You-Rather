import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION } from '../actions/types';

export default function users (state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.userID]: {
          ...state[action.userID],
          answers: {
            ...state[action.userID].answers,
            [action.qid]: action.answer
          }
        }
      };
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
}
