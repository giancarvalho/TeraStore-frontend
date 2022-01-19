import React from 'react';
import styled from 'styled-components';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Arrow({ children, disabled, onClick, ...props }) {
  return (
    <ArrowButton disabled={disabled} onClick={onClick} {...props}>
      {children}
    </ArrowButton>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        zIndex: 10,
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
      }}
    >
      <ArrowLeft />
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        zIndex: 10,
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
      }}
    >
      <ArrowRight />
    </Arrow>
  );
}

export { RightArrow, LeftArrow };

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  opacity: ${({ disabled }) => (disabled ? '0' : '1')};
  transition: opacity 200ms linear;
`;

const ArrowRight = styled(BsFillArrowRightCircleFill)`
  font-size: 32px;
  color: #e0e0e0;
`;

const ArrowLeft = styled(BsFillArrowLeftCircleFill)`
  font-size: 32px;
  color: #e0e0e0; ;
`;
