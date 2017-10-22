import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import FilmCard from '../../js/film/filmCard';
import '../../setupTests.js';

jest.mock('react-bootstrap', () => {
  return {
    Row: (props) => <span>{props.children}</span>,
    Col: (props) => <span>{props.children}</span>
  };
})
jest.mock('../../js/helpers/api', () => {
  return {};
});
jest.mock('../../js/helpers/dates', () => {
  return {
    dateStringToYear: jest.fn()
  };
});
jest.mock('../../js/helpers/img', () => {
  return {
    getImg: (path) => <span>{path}</span>
  };
})

const props = {
  movie: {
    poster_path: 'path1',
    title: 'Title1',
    release_date: new Date(2017, 1, 1),
    category: 'Horor'
  },
  onChoose: jest.fn()
};

describe('FilmCard component', () => {  
  test('FilmCard should render', () => {
    const component = renderer.create(
      <FilmCard {...props}  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });  
});

describe('FilmCard mount', () => {
  const component = mount(
    <FilmCard {...props}  />
  );
  const instance = component.instance();
  instance.onChoose();
  expect(props.onChoose.mock.calls[0][0]).toEqual(props.movie);
});