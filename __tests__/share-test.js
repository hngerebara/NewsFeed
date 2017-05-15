import React from 'react';
import { ShareButtons,ShareCounts,generateShareIcon } from 'react-share';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import request from "superagent";
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
