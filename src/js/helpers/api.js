const apiKey = 'd017d4b2bb5097c7794c3e3d5ad3dfa1'
const apiHost = 'https://api.themoviedb.org/3'
const searchUrl = apiHost + '/search/movie?api_key=' + apiKey + '&append_to_response=credits'

export default {
  imageHost: 'https://image.tmdb.org/t/p/',
  
  findMovies: (keyword) => {
    var foundMovies = [];

    return fetch(searchUrl + '&query=' + encodeURIComponent(keyword))
    .then(data => data.json())
    .then(data => {
      if (data.results && Array.isArray(data.results) === true) {
        foundMovies = data.results;
      } else {
        // todo error handling
      }

      return foundMovies;
    })
  },

  getMovieDetails: (id) => {
    return fetch(apiHost + '/movie/' + id + '?api_key=' + apiKey + '&append_to_response=credits')
    .then(data => data.json())
  },

  getCredits: (id) => {
    return fetch(apiHost + '/movie/' + id + '/credits?api_key=' + apiKey)
    .then(data => data.json())
  },

  getMoviesByPerson: (id) => {
    return fetch(apiHost + '/person/' + id + '/movie_credits?api_key=' + apiKey)
    .then(data => data.json())
  },

  searchPerson: (name) => {
    return fetch(apiHost + '/search/person?query='+name+'&api_key=' + apiKey)
    .then(data => data.json())
  }
}