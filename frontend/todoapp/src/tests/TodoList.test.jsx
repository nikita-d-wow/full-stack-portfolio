import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/todo/TodoList';
import { Provider } from 'react-redux';
import { store } from '../store';
import { describe, it, expect } from 'vitest';

describe('TodoList Component', () => {
  it('renders empty state if no todos', () => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    expect(screen.getByText(/No todos found/i)).toBeInTheDocument();
  });

  it('renders todos and handles toggle & delete', () => {
    store.dispatch({
      type: 'todos/addTask',
      payload: { id: 1, title: 'Test', isCompleted: false },
    });
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Done'));
    expect(screen.getByText('Undo')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText(/Undo Delete/i)).toBeInTheDocument();
  });

  it('undo button restores last deleted todo', () => {
    fireEvent.click(screen.getByText(/Undo Delete/i));
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
