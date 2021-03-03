import { render } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from 'States/root-store';
import App from './AppContainer';

test('renders App', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getAllByText(/Reversi game/i)).toHaveLength(1);
});
