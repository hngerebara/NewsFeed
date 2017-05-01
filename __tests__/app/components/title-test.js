import React from 'react';
import { shallow } from 'enzyme';
import header from '../../../app/components/Header/title';

jest.dontMock('../../../app/components/Header/title');

describe("The header component", ()=> {
    describe("The title display of application", () => {
        it ("should display the title of application", () => {  
            const appTitle = <h1>News Feed Application</h1>;
            const title = shallow(<title />);
  // expect(wrapper.contains(welcome)).to.equal(true);
            expect(title.contains(appTitle)).toEqual(true);
});

       
    })
});