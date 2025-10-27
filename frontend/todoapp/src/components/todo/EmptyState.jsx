import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${COLORS.cream};
  font-weight: 500;
  font-size: 1.1rem;
`;

const EmptyState = ({ message = 'No items yet' }) => {
  return <Wrapper>{message}</Wrapper>;
};

export default EmptyState;
