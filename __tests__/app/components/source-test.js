import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sources from '../../../app/components/sources';

jest.dontMock('../../../app/components/sources');

describe("Displaying Sources", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
    expect(shallow(<Sources />).contains(<div className="col-lg-12" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Sources />).is('.Sources')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Sources/>).find('.sources').length).toBe(70);
  });
});