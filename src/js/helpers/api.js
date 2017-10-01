const apiHost = 'https://netflixroulette.net/api/api.php'

export default {
  
  findMovies: (criteria, keyword) => {
    var foundMovies = [];
    if (criteria === 'show_title') criteria = 'title';

    return fetch(apiHost + '?'+ criteria + '=' + encodeURIComponent(keyword))
    .then(data => data.json())
    .then(data => {
      if (Array.isArray(data) === true) {
        foundMovies = data;
      } else {
        if (data.errorcode >= 400) {
          // todo error handling
        } else {
          foundMovies.push(data);
        }
      }

      return foundMovies;
    })
  }
  
}