import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../components/todo/AddTodo';
import { Provider } from 'react-redux';
import { store } from '../store';
import { describe, it, expect } from 'vitest';

describe('AddTodo Component', () => {
  it('renders input and Add button', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Add a new task/i)).toBeTruthy();
    expect(screen.getByText(/Add/i)).toBeTruthy();
  });

  it('shows error when input is empty', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText(/Todo cannot be empty/i)).toBeTruthy();
  });

  it('adds a todo when input is filled', () => {
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/Add a new task/i);
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.queryByText(/Todo cannot be empty/i)).toBeNull();
  });
});
