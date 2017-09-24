export const search_criteria = (state = [], action) => {
  switch (action.type) {
    case 'set_search_criteria':
      return action.payload.map(item => {
        return Object.assign({}, item)
      })
  
    default:
      return state
  }
}

export const search_active_criteria = (state = {}, action) => {
  switch (action.type) {

    case 'change_search_criteria':
      return Object.assign({}, action.payload)
  
    default:
      return state
  }
}


export const sort_criteria = (state = [], action) => {
  switch (action.type) {
    case 'set_sort_criteria':
      return action.payload.map(item => {
        return Object.assign({}, item)
      })
  
    default:
      return state
  }
}

export const sort_active_criteria = (state = {}, action) => {
  switch (action.type) {

    case 'change_sort_criteria':
      return Object.assign({}, action.payload)
  
    default:
      return state
  }
}


