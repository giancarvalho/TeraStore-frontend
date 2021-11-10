import React from 'react';
import styled from 'styled-components';

export default function ProductCard() {
  return (
    <ProductContainer>
      <img
        src="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pg-sgebk-rgb-v021.jpg"
        alt="cooler"
      />
      <DetailsContainer>
        <Title>Cooler Gamer SKG</Title>
        <Price>R$1000</Price>
      </DetailsContainer>
      <ButtonsContainer>
        <BuyButton>Buy</BuyButton>
        <CartButton>Cart</CartButton>
      </ButtonsContainer>
    </ProductContainer>
  );
}

const ProductContainer = styled.li`
  img {
    height: 150px;
    width: 150px;
    border-radius: 4px 4px 0 0;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #1c1c1c;
`;

const Title = styled.h2`
  font-size: 14px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const ButtonsContainer = styled.div`
  display: flex;

  button {
    border: none;
    height: 26px;
    font-weight: 700;
    cursor: pointer;

    :hover {
      filter: brightness(1.25);
    }
  }
`;

const BuyButton = styled.button`
  width: 55%;
  background-color: #76b900;
  border-radius: 0 0 0 4px;
`;

const CartButton = styled.button`
  width: 45%;
  background-color: #0087d4;
  border-radius: 0 0 4px 0;
`;
