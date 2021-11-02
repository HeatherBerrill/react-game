import { render, screen } from '@testing-library/react';
import Arena from '../screens/Arena';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('<Arena>', () => {
  test('renders the correct arena heading', () => {
    render(
      <MemoryRouter>
        <Arena arena='potting-shed' />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/potting-shed/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the correct arena background', () => {
    render(
      <MemoryRouter>
        <Arena arena='tesco-carpark' />
      </MemoryRouter>
    );
    const backgroundElement = screen.getByTestId('background');
    expect(backgroundElement).toHaveStyle('background-color: rgb(58, 85, 175)');
  });
});
