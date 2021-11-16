import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function TeraStore({ color, fontSize, margin, big }) {
  return (
    <LogoContainer color={color} fontSize={fontSize} margin={margin} big={big}>
      <Link to="/">TeraStore</Link>
    </LogoContainer>
  );
}
const LogoContainer = styled.h1`
  display: inline;
  font-family: 'Black Ops One', cursive;
  font-size: ${({ fontSize }) => fontSize || '42px'};
  font-size: ${({ big }) => (big ? '60px' : '42px')};
  color: ${({ color }) => color || 'inherit'};
  margin: ${({ margin }) => margin || '0'};
  @media (max-width: 600px) {
    font-size: ${({ big }) => (big ? '32px' : '25px')};
  }
`;
