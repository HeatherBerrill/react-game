import { render, screen } from '@testing-library/react';
import Home from '../screens/Home';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('<Home>', () => {
  test('renders a Choose Fighters heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const chooseFightersElement = screen.getByText(/Choose Fighters/i);
    expect(chooseFightersElement).toBeInTheDocument();
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

  //   test('renders a form where a user can pick an arena', () => {
  //     render(
  //       <MemoryRouter>
  //         <Home />
  //       </MemoryRouter>
  //     );
  //     const buttonElement = screen.getByRole('button');
  //     userEvent.click(buttonElement);

  //   });
});
