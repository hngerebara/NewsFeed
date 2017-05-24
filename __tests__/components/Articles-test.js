/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../../app/components/Articles';
import ArticleItem from '../../app/components/ArticleItem';

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

describe('Displaying ArticlesItem', () => {
  const index = { sourceName: 'cnn' };
  const item = {
    title: 'donal trump',
    desciption: 'he won the election',
    publishedate: '2017-05-01'
  };
  const wrap = shallow(
    <ArticleItem key={[index]} index={index} item={item} />
  );
  it('renders 1 <ArticleItem/> component', () => {
    expect(
      wrap.containsAnyMatchingElements([
        <h4>{item.description}</h4>,
        <h5>Published: {item.publisheddate}</h5>
      ])
    ).toBeDefined();
  });

  it('Articles component to have 1 articles tag', () => {
    expect(wrap.find('article')).toHaveLength(1);
  });
  it('articles component to have 4label tags', () => {
    expect(wrap.find('div')).toHaveLength(4);
  });
});

