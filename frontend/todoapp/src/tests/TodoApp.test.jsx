import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../components/TodoApp';
import { describe, it, expect } from 'vitest';

describe('TodoApp', () => {
  it('renders input and Add button', () => {
    render(<TodoApp />);
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeTruthy();
    expect(screen.getByText('Add')).toBeTruthy();
  });

  it('adds a todo on click', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText('Add a new todo...');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Test Todo')).toBeTruthy();
  });
});
