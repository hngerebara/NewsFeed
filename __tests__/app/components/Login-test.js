import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../../../app/components/Login';


jest.dontMock('../../../app/components/Login');

describe('Login Component', () => {
  it('Google Login component should render as expected', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.contains('Welcome to Hopeaz news Feed Application')).toBe(true);
    expect(wrapper.contains('Login With Google')).toBe(true);
    expect(wrapper.find('h5')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(7);
  });
});