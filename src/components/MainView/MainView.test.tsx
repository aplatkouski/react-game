import { render } from '@testing-library/react';
import * as React from 'react';

import MainView from './MainView';

test('renders MainView', () => {
  const { getByText } = render(<MainView />);

  expect(getByText(/Reversi game/i)).toBeInTheDocument();
});
