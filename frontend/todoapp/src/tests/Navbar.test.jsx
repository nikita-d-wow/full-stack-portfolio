import { render, screen } from '@testing-library/react';
import Navbar from '../components/layout/Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar Component', () => {
  it('renders links', () => {
    render(<Navbar />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Todo/i)).toBeInTheDocument();
  });
});
