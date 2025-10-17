import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const InputStyled = styled.input`
  border: 1px solid ${COLORS.gray};
  border-radius: 6px;
  padding: 0.6rem 1rem;
  width: 100%;
  color: ${COLORS.text};
  font-size: 1rem;
  &:focus {
    outline: 2px solid ${COLORS.primary};
  }
`;

const Input = ({ value, onChange, placeholder }) => (
  <InputStyled value={value} onChange={onChange} placeholder={placeholder} />
);

export default Input;
