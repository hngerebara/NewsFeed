import React from 'react';
import header from '../../../app/components/header';
import { shallow } from 'enzyme';
jest.dontMock('../../../app/components/header');

describe('header component', () => {
    it('should exist', () => {
        const header = shallow(<header />);
        //expect(header.exists()).toBe(true);
        expect(header.find('Title')).toHaveLength(1);
    })
})