import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../app/login';

jest.dontMock('../../app/login');

describe('Login Component', () => {
  it('Google Login component should render as expected', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.contains('Welcome to Hopeaz news Feed Application')).toBe(true);
    expect(wrapper.contains('Login With Google')).toBe(true);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(8);
  });
});