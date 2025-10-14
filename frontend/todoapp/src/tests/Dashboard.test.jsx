import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import { vi, describe, it, expect } from 'vitest';

vi.mock('react-chartjs-2', () => ({
  Bar: () => <img alt="mock chart" />,
}));

describe('Dashboard Component', () => {
  const mockTodos = [
    { id: 1, text: 'Task 1', completed: true, category: 'Work' },
    { id: 2, text: 'Task 2', completed: false, category: 'Personal' },
    { id: 3, text: 'Task 3', completed: false, category: 'Work' },
  ];

  it('renders the Dashboard heading', () => {
    render(<Dashboard todos={mockTodos} />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  it('displays the correct total todos count', () => {
    render(<Dashboard todos={mockTodos} />);
    expect(screen.getByText(/Total Todos: 3/i)).toBeInTheDocument();
  });

  it('renders the mocked bar chart', () => {
    render(<Dashboard todos={mockTodos} />);
    const chart = screen.getByAltText(/mock chart/i);
    expect(chart).toBeInTheDocument();
  });
});
