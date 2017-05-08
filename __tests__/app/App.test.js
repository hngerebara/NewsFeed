import React from 'react';
import { mount,shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Footer from '../../app/components/Footer'
import Main from '../../app/components/containers/Main';
 
jest.dontMock('../../app/components/containers/Main');

describe("Suite for the entire App", () => {
  it('renders without Exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
  });

  it('should render a footer component', () => {
     const footer = mount(<Main />);
     expect(footer.find(Footer)).toBeDefined();
  })
});
