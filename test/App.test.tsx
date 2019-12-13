import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('App', () => {
    expect(
      shallow(<App />).length
    ).toBe(1);
  });
});