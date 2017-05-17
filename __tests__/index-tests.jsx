import React from 'react';
import { mount } from 'enzyme';
import Login from '../app/components/Login';

describe('App', () => {
  const wrapper = mount(<Login />);
  it('should find Login component', () => {
    expect(wrapper.find(Login)).toBeDefined();
  });
});
