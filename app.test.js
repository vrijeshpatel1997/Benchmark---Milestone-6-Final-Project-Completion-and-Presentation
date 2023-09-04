// App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders App component with navigation', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // Check if "Milestone 4" text is present in Navbar
  const navbarBrand = screen.getByText(/Milestone 4/i);
  expect(navbarBrand).toBeInTheDocument();

  // Check if "add Product" link is present
  const addProductLink = screen.getByText(/add Product/i);
  expect(addProductLink).toBeInTheDocument();

  // Click on "add Product" link
  fireEvent.click(addProductLink);

  // Check if user is navigated to AddProduct page
  const addProductHeader = screen.getByText(/Add Product/i);
  expect(addProductHeader).toBeInTheDocument();
  // You can add more specific tests for AddProduct functionality
});
