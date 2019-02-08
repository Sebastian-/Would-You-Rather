import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER } from '../actions/shared'

export default function users (state = {}, action) {
  switch (action.type) {
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
      }
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}
