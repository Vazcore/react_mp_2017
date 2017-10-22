import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Film from '../../js/film/film';
import '../../setupTests.js';

jest.mock('../../js/film/filmList', () => {
  const component = () => <ul id="filmList"></ul>;
  return component;
});
jest.mock('../../js/actions/movies', () => ({}));
jest.mock('react-redux', () => {
  return {
    connect: () => {
      return componentClass => componentClass
    }
  };
});
jest.mock('react-router-dom', () => {
  return {
    withRouter: componentClass => componentClass
  }
});

global.scroll = jest.fn();
const props = {
  moviesByDirector: [{id:1}],
  selectMovie: jest.fn(),
  history: {
    push: jest.fn()
  }
};

describe('Film component', () => {  
  test('Film should render', () => {
    const component = renderer.create(
      <Film {...props}  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });  
});

describe('Film mount', () => {
  
  test('should set', () => {
    const component = mount(
      <Film {...props}  />
    );
    const instance = component.instance();
    const movie = {id: 1};
    instance.onChoose(movie);
    expect(props.selectMovie.mock.calls[0][0]).toEqual(movie);
    expect(props.history.push.mock.calls[0][0]).toBe(`/film/${movie.id}`);
  });  
});