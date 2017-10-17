const DATES = {};

DATES.dateStringToYear = dateString => {
  const date = new Date(dateString);
  return date.getFullYear();
};

DATES.getRandom = (from, to) => {
  return Math.round(Math.random() * (to - from) + to)
};

DATES.mapWithUniqueId = (movies) => {
  return movies.map(movie=>{
    movie.c_id = DATES.getRandom(99, 9999) + movie.id;
    return movie;
  });
}

DATES.sortMovies = (movies, option) => {
  const sortedMovies = movies.sort((a,b) => {
    let aVal, bVal;
    switch (option.prop) {
      case 'vote_average':
        aVal = parseFloat(a[option.prop]);
        bVal =  parseFloat(b[option.prop]);
        break;
      case 'release_date':
        aVal = DATES.dateStringToYear(a[option.prop]);
        bVal = DATES.dateStringToYear(b[option.prop]);
        break;
    }
    if (aVal === bVal) {
      return a.id < b.id ? -1 : 1;
    } else if (aVal < bVal) {
      return 1;
    } else {
      return -1;
    }
  });
  
  return DATES.mapWithUniqueId(sortedMovies);
};

DATES.removeDuplicatesByProperty = (movies, prop) => {
  let ids = [];
  return movies.filter(el => {
    if (ids.indexOf(el[prop]) === -1) {
      ids.push(el[prop]);
      return true;
    }
  })
}

export default DATES;
