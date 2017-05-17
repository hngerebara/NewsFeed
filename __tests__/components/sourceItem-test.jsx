import React from 'react';
import { shallow } from 'enzyme';
import SourcesItem from '../../app/components/SourceItems';

describe('SourceItem Component', () => {
  it('Component should render as expected', () => {
    const wrapper = shallow(<SourcesItem />);
    expect(wrapper.find('option')).toHaveLength(1);
  });
});
