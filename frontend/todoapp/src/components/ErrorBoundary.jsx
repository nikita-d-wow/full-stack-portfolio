import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/constants';

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
  background: ${COLORS.background};
  color: ${COLORS.danger};
  font-weight: 600;
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`;

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Wrapper>Something went wrong. Please reload.</Wrapper>;
    }
    return this.props.children;
  }
}
