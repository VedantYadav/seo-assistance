import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { App } from './App';

afterEach(cleanup);

test('renders App', () => {
  render(<App />);
});

it('should take a App snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
