import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import Input from '../../js/common/input.component';
import '../../setupTests.js';

jest.mock('../../js/common/dropdownList', () => {
  const component = () => <ul></ul>;
  return component;
});

jest.mock('../../js/common/label.component', () => {
  const component = () => <label></label>;
  return component;
});

describe('Input component', () => {
  const props = {
    id: 1,
    label: 'Label1',
    type: 'text',
    autocomplete: 'off',
    placeholder: 'Title1',
    icon: 'path1',
    onChangeElement: jest.fn()
  };
  test('Input should render', () => {
    const component = renderer.create(
      <Input {...props} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Input behaviour', () => {
    let component, instance, initValue="Value0";
    beforeAll(() => {
      component = mount(
        <Input initValue={initValue} dropdownList={[{id:1}]} {...props} />
      );
      instance = component.instance();
    });

    test('Recieve props', () => {
      instance.componentWillReceiveProps({
        initValue
      });
      expect(instance.props.initValue).toBe(initValue);
      expect(props.onChangeElement.mock.calls[0][0]).toEqual({id: props.id, value: initValue});
      expect(instance.state.value).toBe(initValue);
    });

    test('Should render dropdownList', () => {
      expect(component.find('ul').length).toBe(1);
    });
    
    test('expect change state', () => {
      const event = {target: {
        value: 'Value1'
      }};
      instance.onChangeInput(event);
      expect(props.onChangeElement.mock.calls[1][0]).toEqual({id: props.id, value: event.target.value});
      expect(instance.state.value).toBe(event.target.value);
    });
  });
 
});