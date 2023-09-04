// Nabar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Nabar from '../layout/Nabar';


test('renders Navbar component', () => {
  const { getByText } = render(<Nabar />);
  const navbarBrand = getByText(/Milestone 4/i);
  expect(navbarBrand).toBeInTheDocument();
});

// Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './pages/Home';

test('renders Home component', () => {
  render(<Home />);
  // You can add more specific tests for Home component if needed
});

// AddProduct.test.js
import React from 'react';
import { render } from '@testing-library/react';
import AddProduct from './products/AddProduct';

test('renders AddProduct component', () => {
  render(<AddProduct />);
  // You can add more specific tests for AddProduct component if needed
});

// EditProduct.test.js
import React from 'react';
import { render } from '@testing-library/react';
import EditProduct from './products/EditProduct';

test('renders EditProduct component', () => {
  render(<EditProduct />);
  // You can add more specific tests for EditProduct component if needed
});