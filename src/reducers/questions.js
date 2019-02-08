import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_ANSWER } from '../actions/shared'

export default function questionReducer(state = {}, action) {
  switch(action.type) {
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
      }
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state;
  }
}