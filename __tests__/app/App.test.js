import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../pages/main';


describe("Suite fo the entire App", () => {
  it('renders without Exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main />, div);
  });
});
