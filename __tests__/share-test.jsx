/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import Share from '../app/utils/share';

jest.dontMock('../app/utils/share');

const wrapper = shallow(<Share />);
describe('test for share componet', () => {
  it('the component should exist', () => {
    expect(wrapper).toExist;
  });
  it('it should contain a 4 Demo__some-network class names', () => {
    expect(['Demo__some-network']).toHaveLength(1);
  });
});
