import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../redux/todoSlice';
import { COLORS } from '../../utils/constants';

const Reset = styled.button`
  background: ${COLORS.darkerGray};
  color: ${COLORS.white};
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #b91c1c;
  }
`;

const ResetButton = () => {
  const dispatch = useDispatch();
  return <Reset onClick={() => dispatch(resetAll())}>Reset All</Reset>;
};

export default ResetButton;
