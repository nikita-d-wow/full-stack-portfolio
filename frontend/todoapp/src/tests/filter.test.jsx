import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/todo/Filter';
import { Provider } from 'react-redux';
import { store } from '../store';
import { describe, it, expect } from 'vitest';

describe('Filter Component', () => {
  it('renders filter options', () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    expect(screen.getByText(/all/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
  });

  it('changes filter on click', () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    fireEvent.click(screen.getByText(/active/i));
    expect(store.getState().todos.filter).toBe('active');
  });
});
