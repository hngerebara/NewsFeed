import React from 'react';
import { shallow } from 'enzyme';
import NewsActions from '../../../app/actions/NewsActions';

describe('Action test', () => {
  test('the data received is an araay of 70 sources', () => {
  expect.assertions(1);
  return getNewsSources().then(data => {
    expect(data).toBe('array[70]');
  });
  });
});