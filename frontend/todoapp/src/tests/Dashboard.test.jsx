import React from 'react';
import { render, screen } from '@testing-library/react';
import BarChart from '../components/dashboard/BarChart';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../store/todoSlice';
import { vi, describe, it, expect } from 'vitest';

vi.mock('react-chartjs-2', () => ({
  Bar: () => <div data-testid="bar-chart-mock">Mock Bar Chart</div>,
}));

describe('BarChart Component', () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: {
      todos: {
        items: [
          { id: 1, title: 'Task 1', isCompleted: true },
          { id: 2, title: 'Task 2', isCompleted: false },
        ],
      },
    },
  });

  it('renders chart container and title', () => {
    render(
      <Provider store={store}>
        <BarChart />
      </Provider>
    );

    expect(screen.getByText(/Statistics/i)).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart-mock')).toBeInTheDocument();
  });

  it('renders chart correctly with no todos', () => {
    const emptyStore = configureStore({
      reducer: { todos: todosReducer },
      preloadedState: { todos: { items: [] } },
    });

    render(
      <Provider store={emptyStore}>
        <BarChart />
      </Provider>
    );

    expect(screen.getByText(/Statistics/i)).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart-mock')).toBeInTheDocument();
  });
});
