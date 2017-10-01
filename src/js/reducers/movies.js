export const movies = (state = [], action) => {
  switch (action.type) {
    case 'search':
      return action.payload.map(item => {
        return Object.assign({}, item)
      })
  
    default:
      return state
  }
}


export const moviesByDirector = (state = [], action) => {
  switch (action.type) {
    case 'set_movies_by_director':
      return action.payload.map(item => {
        return Object.assign({}, item)
      })
  
    default:
      return state
  }
}