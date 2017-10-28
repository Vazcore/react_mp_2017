import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import FilmHeader from '../../js/film/filmHeader';
import '../../setupTests.js';

const movie = {
  id: 1,
  poster_path: 'path1',
  title: 'Title1',
  release_date: new Date(2017, 1, 1),
  category: 'Horor',
  credits: {
    crew: []
  }
};

jest.mock('../../js/actions/movies', () => ({}))

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return componentClass => componentClass
    }
  };
});
jest.mock('react-router-dom', () => {
  return {
    withRouter: componentClass => componentClass,
    Link: (props) => <span>{props.children}</span>
  }
});

jest.mock('react-bootstrap', () => {
  return {
    Row: (props) => <span>{props.children}</span>,
    Col: (props) => <span>{props.children}</span>
  };
});
jest.mock('../../js/helpers/api');

jest.mock('../../js/helpers/dates', () => {
  return {
    dateStringToYear: (date) => date.toString(),
    findDirector: () => ({id:'director'}),
    removeDuplicatesByProperty: (movies, id) => movies
  };
});
jest.mock('../../js/helpers/img', () => {
  return {
    getImg: (path) => <span>{path}</span>
  };
})

const props = {
  match: {
    params: { title: 'Title1' }
  },
  selectMovie: jest.fn(),
  selectedMovie: movie,
  setMoviesByDirector: jest.fn()
};

describe('FilmHeader component', () => {  
  test('FilmHeader should render', () => {
    const component = renderer.create(
      <FilmHeader {...props}  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });  
});

describe('FilmHeader mount', () => {
  let component, instance;
  beforeAll(() => {
    component = mount(
      <FilmHeader {...props}  />
    );
    instance = component.instance();
  });
  afterAll(() => {
    jest.resetAllMocks();
  })
  test('should set movie', () => {
    const foundMoviesByDirectorSpy = jest.spyOn(instance, 'foundMoviesByDirector');
    return instance.foundMovie('Title2').then(movie => {
      expect(instance.movie).toEqual(movie);
      expect(foundMoviesByDirectorSpy).toHaveBeenCalledWith({id:'director'});
    });
  });
});