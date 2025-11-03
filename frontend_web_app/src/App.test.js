import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app shell', () => {
  render(<App />);
  const shell = screen.getByText(/Foodie Connect/i);
  expect(shell).toBeInTheDocument();
});
