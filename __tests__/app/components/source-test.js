import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sources from '../../../app/components/sources';

jest.dontMock('../../../app/components/sources');

describe("Displaying Sources", () => {
    it ('renders 1 <Sources /> component', () => {
        const sourcesComponent = shallow(<Sources name="sources"/>);
        //console.log(sourcesComponent.props,"this is the source component test")
        expect(sourcesComponent).toHaveLength(1);
    });
    describe('it renders props correctly', () => {
        const sourcesComponent = shallow(<Sources name="sources" />)
        console.log("value of props",sourcesComponent.props())
        //expect(sourcesComponent.instance().props.name).toBe('app')
    })
  // it("contains spec with an expectation", function() {
  //   expect(true).toBe(true);
  //   expect(shallow(<Sources />).contains(<div className="col-lg-12" />)).toBe(true);
  // });

  // it("mounts sources as expected", function() {
  //   expect(shallow(<Sources />).is('.Sources')).toBe(true);
  // });

  // it("contains spec with an expectation", function() {
  //   expect(mount(<Sources/>).find('.sources').length).toBe(70);
  // });
});