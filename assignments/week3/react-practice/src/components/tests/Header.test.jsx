import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header component', () => {
  it('renders text prop', () => {
    render(<Header text="Welcome" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('applies gradient class', () => {
    const { container } = render(<Header text="Header" />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('bg-gradient-to-r');
  });
});
