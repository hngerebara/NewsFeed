import React from 'react';
import NavBar from '../../app/components/Header/nav'
import { shallow } from 'enzyme';

describe('<NavBar />', () => {
    it ('renders 1 <NavBar /> component', () => {
        const navComponent = shallow(<NavBar />);
        expect(navComponent).toHaveLength(1);
    });
});
