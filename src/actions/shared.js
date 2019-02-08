import { getInitialData, saveQuestionAnswer } from '../utils/API'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { setAuthUser } from './authedUser'


export const ADD_ANSWER = 'ADD_USER_ANSWER'

export function addAnswer (userID, qid, answer) {
  return {
    type: ADD_ANSWER,
    userID,
    qid,
    answer
  }
}

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions, users }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthUser('tylermcginnis'))
      })
  }
}

export function handleQuestionResponse ({ qid, authedUser, answer }) {
  return (dispatch) => {
    return saveQuestionAnswer({ qid, authedUser, answer})
      .then(() => {
        dispatch(addAnswer(authedUser, qid, answer))
      })
  }
}