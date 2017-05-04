import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../../pages/main';
import Header from '../../../app/components/header';

describe('Header component', () => {

    it('should render at least one <Header/> components', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find(Header)).toHaveLength(1);
    });
})