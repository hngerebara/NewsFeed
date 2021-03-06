import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../app/components/Footer';

jest.dontMock('../../app/components/Footer');

describe('Footer component', () => {
  it('Footer component should render as expected', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Copyright © Andela 2017. All Rights Reserved'))
    .toBe(true);
    expect(wrapper.find('div')).toHaveLength(3);
  });
});
