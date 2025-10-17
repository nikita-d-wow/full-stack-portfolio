import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../utils/constants';

const baseStyle = css`
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  color: ${COLORS.white};
  transition: all 0.2s ease-in-out;
`;

const ButtonStyled = styled.button`
  ${baseStyle}

  ${({ $type }) => {
    switch ($type) {
      case 'SUCCESS':
        return css`
          background: ${COLORS.success};
          &:hover {
            background: #16a34a;
          }
        `;
      case 'DANGER':
        return css`
          background: ${COLORS.danger};
          &:hover {
            background: #b91c1c;
          }
        `;
      case 'PRIMARY':
      default:
        return css`
          background: ${COLORS.blueGradient};
          &:hover {
            background: ${COLORS.purpleGradient};
          }
        `;
    }
  }}
`;

const Button = ({ children, type = 'PRIMARY', ...props }) => {
  return (
    <ButtonStyled $type={type} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
