import { render, screen } from '@testing-library/react';
import App from './App';

const renderApp = () => {
  render(<App />)
}

describe('App Component', () => {
  it('renders with header component', () => {
    renderApp();

    const header = screen.getByTestId('header');
    expect(header).toBeVisible();
  })
  it('renders with content component', () => {
    renderApp();

    const content = screen.getByTestId('content');
    expect(content).toBeVisible();
  });
})