import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';
import { describe, expect, it, vi } from 'vitest';

describe('Button component', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('CLick Me')).toBeInTheDocument();
  });

  it('calls onCLick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct Tailwind classes for variant', () => {
    render(<Button label="Primary" variant="primary" />);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-blue-600');
  });
});
