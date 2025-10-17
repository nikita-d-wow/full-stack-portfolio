import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import { describe, expect, it, vi } from 'vitest';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Press</Button>);
    fireEvent.click(screen.getByText(/Press/i));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom class', () => {
    render(<Button className="bg-red-500">Styled</Button>);
    const btn = screen.getByText(/Styled/i);
    expect(btn).toHaveClass('bg-red-500');
  });
});
