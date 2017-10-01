export default (state = {}, action) => {
  switch (action.type) {
    case 'select':
      return Object.assign({}, action.payload)
  
    default:
      return state
  }
}