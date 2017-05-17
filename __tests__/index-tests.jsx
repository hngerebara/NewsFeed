import React from 'react';
import { mount } from 'enzyme';
import firebase from 'firebase';
import Login from '../app/components/Login';


let firebaseInit = jest.Login.firebaseInit();
console.log(firebaseInit.debug());

describe('App', () => {
  const wrapper = mount(<Login />);
  it('should find Login component', () => {
    expect(wrapper.find(Login)).toBeDefined();
  });
});
