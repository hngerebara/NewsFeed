import React from 'react';
import { shallow } from 'enzyme';
import Sources from '../../../app/components/sources';

describe('Sources component', () => {
   
    it('should render children when passed in', () => {
    const wrapper = shallow(
      <Sources>
        <div  className="col-lg-12" />
      </Sources>
    );
    expect(wrapper.contains(<div  className="col-lg-12"/>)).toEqual(true);
  });
})