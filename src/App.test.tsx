import { render } from '@testing-library/react';
import React from 'react';
import App from './AppContainer';

test('renders App', () => {
  const { getAllByText } = render(<App />);

  expect(getAllByText(/Reversi game/i)).toHaveLength(1);
});
