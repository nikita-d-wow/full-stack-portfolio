import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Wrapper = styled.section`
  background: ${COLORS.backgroundGradient};
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem; /* ensures space on very small screens */
`;

const Card = styled.div`
  background: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
  padding: 1.5rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 1rem;
  }

  @media (max-width: 320px) {
    padding: 0.8rem;
  }
`;

const Title = styled.h2`
  color: ${COLORS.charcoal};
  font-size: 1.8rem;
  margin-bottom: 1rem;

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  color: ${COLORS.text};
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Card>
        <Title>About This App</Title>
        <Text>
          This Todo Application is built with React, Redux, Styled Components, Custom Hooks, and
          React Router. It includes persistent storage, task filtering, undo, and data
          visualization.
        </Text>
      </Card>
    </Wrapper>
  );
}
