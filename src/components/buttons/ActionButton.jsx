import React from 'react';
import styled from 'styled-components';

export default function ActionButton({ children, className }) {
  return <Button className={className}>{children}</Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 40px;
  font-size: 22px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  :hover {
    filter: brightness(1.25);
  }
`;
