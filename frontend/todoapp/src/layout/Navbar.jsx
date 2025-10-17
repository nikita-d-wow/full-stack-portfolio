import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../utils/constants';
import { ROUTES } from '../utils/routes';

const Nav = styled.nav`
  background: ${COLORS.zinc};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${COLORS.black};
  font-size: 1.5rem;
  font-weight: 700;
`;

const Links = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(NavLink)`
  color: ${COLORS.black};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: 0.3s;

  &.active::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${COLORS.cream};
  }

  &:hover {
    color: ${COLORS.cream};
  }
`;

const Navbar = () => (
  <Nav>
    <Title>Todo App</Title>
    <Links>
      <StyledLink to={ROUTES.HOME}>Home</StyledLink>
      <StyledLink to={ROUTES.TODO}>Todos</StyledLink>
      <StyledLink to={ROUTES.ABOUT}>About</StyledLink>
    </Links>
  </Nav>
);

export default Navbar;
