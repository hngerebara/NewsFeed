import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../../app/components/containers/Main';
import Header from '../../../app/components/Header';

describe('Header component', () => {
    it('should render at least one <Header/> components', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });
})