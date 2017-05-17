import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Main from '../../app/components/containers/Main';
import Footer from '../../app/components/Footer';

jest.dontMock('../../app/components/containers/Main');

describe('App Component', () => {
  const wrapper = mount(<Main />);
  it('renders without crashing', () => {
    const div = document.createElement('app');
    ReactDOM.render(<Main />, div);
  });

  it('should render a footer component', () => {
    expect(wrapper.find(Footer)).toBeDefined();
  });
});
