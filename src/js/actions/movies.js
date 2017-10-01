export const searchMovie = movies => ({type: 'search', payload: movies})

export const selectMovie = movie => ({type: 'select', payload: movie})