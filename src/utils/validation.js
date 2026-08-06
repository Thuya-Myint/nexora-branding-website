export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// export const isInputValid = (regex, input) => {
//   return regex.test(input)
// }