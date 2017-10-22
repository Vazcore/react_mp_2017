import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import {moviesByDirector, movies, activeDirector} from '../../js/reducers/movies';
import '../../setupTests.js';

const moviesData = [
  {id:1},
  {id:2}
];

describe('Test movies reducer', () => {
  test('Default state for movies', () => {
    expect(movies()).toEqual([]);
  });

  test('Set state for movies', () => {
    expect(movies([],{type:'search', payload: moviesData})).toEqual(moviesData);
  });
});

describe('Test moviesByDirector reducer', () => {
  test('Default state for moviesByDirector', () => {
    expect(moviesByDirector()).toEqual([]);
  });

  test('Not set state for moviesByDirector', () => {
    expect(moviesByDirector([],{type:'search', payload: moviesData})).toEqual([]);
  });

  test('Set state for moviesByDirector', () => {
    expect(moviesByDirector([],{type:'set_movies_by_director', payload: moviesData})).toEqual(moviesData);
  });
});

describe('Test activeDirector reducer', () => {
  test('Default state for activeDirector', () => {
    expect(activeDirector()).toEqual({});
  });

  test('Set state for activeDirector', () => {
    const director = {id:1, name: 'Alex'}
    expect(activeDirector({},{type:'set_active_directive', payload: director})).toEqual(director);
  });
});


