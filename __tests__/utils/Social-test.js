import React from 'react';
import { shallow } from 'enzyme';
import Social from '../../app/utils/Social';

const wrapper = shallow(<Social />);
describe('test for Social componet', () => {
  it('the component should exist', () => {
    expect(wrapper).toExist;
  });
  it('it should contain a 4 Demo__some-network class names', () => {
    expect(['Demo__some-network']).toHaveLength(1);
  });
});
