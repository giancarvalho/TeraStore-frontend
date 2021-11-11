import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function TeraStore({ color, fontSize }) {
  return (
    <LogoContainer color={color} fontSize={fontSize}>
      <Link to="/">TeraStore</Link>
    </LogoContainer>
  );
}
const LogoContainer = styled.h1`
  font-family: 'Black Ops One', cursive;
  font-size: ${({ fontSize }) => fontSize || '42px'};
  color: ${({ color }) => color || 'inherit'};

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
