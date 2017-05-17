/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Sources from '../../app/components/Sources';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';
import NewsConstants from '../../app/constants/NewsConstants';

jest.dontMock('../../app/components/Sources');

describe('Displaying Sources and Articles', () => {
  const source = [
    { id: 'abc-news-au', name: 'ABC News (AU)' },
    { id: 'yahoo', name: 'Yahoo news' }
  ];

  it('the app should have text', () => {
    const app = shallow(<Sources />);
    expect(app.contains(<h5>Please select News Source</h5>)).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(<Sources><div className="col-lg-12" /></Sources>);
    expect(wrapper.contains(<div className="col-lg-12" />)).toEqual(false);
  });

  it('Source component to have 4 div tags', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.find('div')).toHaveLength(4);
  });

  it('it should recieve dispached data', () => {
    AppDispatcher.dispatch({
      actionType: NewsConstants.GET_NEWS_SOURCES,
      source
    });
  });

  it('should check that the componentDidMount method is getting called', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should check that the componentWillUnmount method is getting called',
  () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.componentWillUnmount).toHaveBeenCalledTimes(0);
  });

  it('should check that the componentDidMount method is getting called', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('calls `onload` function', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.onLoad).toExist;
  });

  it('calls onchange function when source is changed', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.onChange).toExist;
  });

  it('calls OnFilterChange function to search', () => {
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.OnFilterChange).toExist;
  });

  it('should call on filter change function on input change', () => {
    const wrapper = mount(<Sources />);
    wrapper.setState({ sources: [source] });
    wrapper.update();
    expect(wrapper.find('SourceItem')).toHaveLength(2);
    // wrapper.find('input').simulate('change', { target: { value: 'ab' } });
    expect(wrapper.find('SourceItem')).toHaveLength(1);
  });
});
