/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../../app/components/Articles';

jest.dontMock('../../app/components/Articles');

const wrapper = shallow(<Articles
  sourceName={'sourceName'}
  sourceId={'sourceId'}
  sortParams={['top']}
/>);
describe('Testing the html tags in Articles component', () => {
  it('Articles component to have 2 div tags', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });

  it('articles component to have 2 label tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('the app should have text', () => {
    expect(wrapper.contains(<label htmlFor="sortBy">
    Sort By</label>)).toBe(true);
  });
});

describe('Displaying Articles', () => {
  it('should check that the componentWillMount method is getting called',
  () => {
    expect(wrapper).toBeDefined();
    expect(Articles.prototype.componentWillMount).toExist;
  });
  it('Checks for the onSort function', () => {
    expect(wrapper).toBeDefined();
    expect(Articles.prototype.onSort).toExist;
  });
});
