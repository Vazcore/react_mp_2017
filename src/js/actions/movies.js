export const searchMovie = movies => ({type: 'search', payload: movies})

export const selectMovie = movie => ({type: 'select', payload: movie})

export const setMoviesByDirector = movies => ({type: 'set_movies_by_director', payload: movies})

export const setActiveDirector = director => ({type: 'set_active_directive', payload: director})