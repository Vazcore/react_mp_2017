export default (state = '', action) => {
  switch (action.type) {
    case 'change_keyword':
      return action.payload
  
    default:
      return state
  }
}