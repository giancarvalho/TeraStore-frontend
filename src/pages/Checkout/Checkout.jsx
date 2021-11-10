import React from 'react';
import styled from 'styled-components';

import CheckoutTable from './elements/CheckoutTable';
import StyledButton from './elements/StyledButton';
import CheckoutForm from './elements/CheckoutForm';

export default function Pages() {
  return (
    <Wrapper>
      <MockedHeader />
      <CheckoutTable />
      <StyledButton color="#0087D4" isButtonEnabled>Go to checkout</StyledButton>
      <CheckoutForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 138px 0px 0px;
`;

const MockedHeader = styled.div`
  width: 100%;
  height: 84px;
  background-color: #151515;
  border-bottom: solid 1px #b99696;
  position: fixed;
  top: 0;
  left: 0;
`;
