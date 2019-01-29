import { getInitialData } from '../utils/API'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
      })
  }
}