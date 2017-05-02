import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../../app/components/Header/title';

jest.dontMock('../../../app/components/Header/title');

describe("Testing the title of Application", () => {
    it("should display the title of application", () => {
        const appTitle = <h1>News Feed Application</h1>;
        const title = shallow(<Title />);
        expect(title.contains(appTitle)).toEqual(true);
    });

});