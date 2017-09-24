export default (state = [], action) => {
  switch (action.type) {
    case 'search':
      return action.payload.map(item => {
        return Object.assign({}, item)
      })
  
    default:
      return state
  }
}