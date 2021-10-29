import { render, screen } from '@testing-library/react';
import Home from '../screens/Home';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<Home>', () => {
  test('renders a Choose Fighters heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/choose fighters/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders a Choose an Arena heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const chooseArenaElement = screen.getByText(/Choose Arena/i);
    expect(chooseArenaElement).toBeInTheDocument();
  });
});
