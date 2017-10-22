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
jest.mock('../../js/helpers/api', () => {
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
  return {
    getMoviesByPerson: jest.fn(),
    getMovieDetails: () => new Promise((resolve, reject) => resolve(movie)),
    getCredits: () => new Promise((resolve, reject) => resolve({}))
  };
});
jest.mock('../../js/helpers/dates', () => {
  return {
    dateStringToYear: jest.fn(),
    findDirector: () => ({})
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
  selectedMovie: movie
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
  // const component = mount(
  //   <FilmHeader {...props}  />
  // );
  // const instance = component.instance();
  // instance.foundMovie('Title2');
  // expect(instance.movie).toBe(movie.id);
});