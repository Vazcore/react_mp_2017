let credits = {crew:[{id:1}], cast:[{id:1}]};
let movie = {
  id: 1,
  poster_path: 'path1',
  title: 'Title1',
  release_date: new Date(2017, 1, 1),
  category: 'Horor',
  credits: {
    crew: [{id:2}],
    cast:[{id:1}]
  }
};
const API = {};

API.getMoviesByPerson = (director) => new Promise((resolve, reject) => resolve(credits));
API.getMovieDetails = (title) => new Promise((resolve, reject) => resolve(movie));
API.getCredits = () => new Promise((resolve, reject) => resolve({}));

export default API;