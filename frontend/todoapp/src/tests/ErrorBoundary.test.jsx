import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { describe, it, expect } from 'vitest';

function Bomb() {
  throw new Error('Boom!');
}

describe('ErrorBoundary', () => {
  it('renders fallback UI on error', () => {
    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );
    expect(screen.getByText('Something went wrong!')).toBeTruthy();
    expect(screen.getByText('Boom!')).toBeTruthy();
  });
});
