/* actions.js */
const userActions = [
    'LOGIN',
    'LOGOUT'
]

const postActions = [
    'ADD_POST',
    'REMOVE_POST'
]
  
export default [
    ...userActions,
    ...postActions
  ].reduce((a, c) => {
    a[c] = c
    return a
  }, {})