import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: ${COLORS.warning};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;

export default function UndoButton({ lastDeleted, onUndo }) {
  if (!lastDeleted) return null;

  return <Button onClick={onUndo}>Undo</Button>;
}
