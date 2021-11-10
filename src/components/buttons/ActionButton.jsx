import React from 'react';
import styled from 'styled-components';

export default function ActionButton({ children, fontSize, className }) {
  return (
    <Button className={className} fontSize={fontSize}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35px;
  min-width: 40px;
  font-size: ${({ fontSize }) => fontSize || '22px'};
  background-color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  :hover {
    filter: brightness(1.25);
  }
`;
