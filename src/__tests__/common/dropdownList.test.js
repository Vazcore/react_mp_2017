import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import DropdownList from '../../js/common/dropdownList';
import '../../setupTests.js';

describe('DropdownList component', () => {
  const props = {
    list: [
      {id: 1},
      {id: 2},
      {id: 3}
    ],
    onDropDownItemClick: jest.fn()
  };
  test('DropdownList should render', () => {
    const component = renderer.create(
      <DropdownList {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`Should have ${props.list.length} list items`, () => {
    const component = mount(
      <DropdownList {...props} />
    );
    expect(component.find('ul').children().length).toBe(props.list.length);
  });
 
});