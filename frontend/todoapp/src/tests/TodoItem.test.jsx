import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { describe, it, expect, vi } from 'vitest';

describe('TodoItem', () => {
  const todo = { id: 1, title: 'Test Todo', completed: false };
  const onRemove = vi.fn();

  it('renders todo title', () => {
    render(<TodoItem todo={todo} onRemove={onRemove} />);
    expect(screen.getByText('Test Todo')).toBeTruthy();
  });

  it('toggles completed state', () => {
    render(<TodoItem todo={todo} onRemove={onRemove} />);
    const button = screen.getByText('Done');
    fireEvent.click(button);
    expect(screen.getByText('Undo')).toBeTruthy();
  });

  it('calls onRemove when ✕ is clicked', () => {
    render(<TodoItem todo={todo} onRemove={onRemove} />);
    const button = screen.getByText('✕');
    fireEvent.click(button);
    expect(onRemove).toHaveBeenCalledWith(1);
  });
});
