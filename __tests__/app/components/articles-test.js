import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../../../app/components/articles';

jest.dontMock('../../../app/components/articles');

describe("Displaying Articles", () => {
    it ('renders 1 <Articles /> component', () => {
        const articlesComponent = shallow(<Articles />);
        expect(articlesComponent).toBe(true);
    });
});