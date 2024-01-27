// App.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the app correctly', () => {
    render(<App />);
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
  });

  it('fetches weather data when search button is clicked', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter city');
    fireEvent.change(input, { target: { value: 'London' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('London')).toBeInTheDocument();
    });
  });

  it('displays error message for invalid city', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter city');
    fireEvent.change(input, { target: { value: 'InvalidCityName' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('City not found')).toBeInTheDocument();
    });
  });
});
