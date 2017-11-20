import Search from './search/search';
import SearchBar from './search/searchBar';
import FilmHeader from './film/filmHeader';

export default [
  {
    path: '/search/:keyword/:criteria',
    component: Search
  },
  {
    path: '/film/:title',
    component: FilmHeader
  }
]