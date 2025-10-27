import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const Select = styled.select`
  border: 1px solid ${COLORS.white};
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  color: ${COLORS.text};
  font-size: 1rem;
  background: ${COLORS.white};
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    background: ${COLORS.darkGray};
    color: ${COLORS.white};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Dropdown = ({ options = [], value, onChange }) => (
  <Select value={value} onChange={onChange}>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt.charAt(0).toUpperCase() + opt.slice(1)}
      </option>
    ))}
  </Select>
);

export default Dropdown;
