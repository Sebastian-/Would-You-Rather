export function formatDate(timestamp) {
  const d = new Date(timestamp)
  return d.toLocaleDateString()
}

export function formatQuestion(question, author) {
  const { timestamp, optionOne, optionTwo } = question
  const { avatarURL, name } = author

  return {
    timestamp,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    avatarURL,
    authorName: name
  }
}
