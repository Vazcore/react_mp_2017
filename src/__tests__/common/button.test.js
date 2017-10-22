import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Button from '../../js/common/button.component';
import '../../setupTests.js';

describe('Common Button component', () => {
  const props = {
    type: "button",
    id: "button",
    disabled: false,
    buttonValue: "Button"
  };
  test('Button should render', () => {
    const component = renderer.create(
      <Button {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button should have a value', () => {
    const component = shallow(
      <Button {...props} />
    );
    expect(component.find('input').props().value).toBe(props.buttonValue);
  })
});