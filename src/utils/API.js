import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer
} from './_DATA'

export function getInitialData() {
  return Promise.all([
    _getQuestions(),
    _getUsers()
  ]).then(([ questions, users ]) => ({
    questions,
    users
  }))
}

/**
 * 
 * @param {authedUser, qid, answer} info 
 * answer is either 'optionOne' or 'optionTwo'
 */
export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}