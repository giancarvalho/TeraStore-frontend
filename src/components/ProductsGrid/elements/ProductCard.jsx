/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';

export default function ProductCard({ productData }) {
  const [addItemToCart, setAddItemToCart] = useState(false);
  const [nItemsInCart, setnItemsInCart] = useState(0);

  function addToCart() {
    setAddItemToCart(true);
    setnItemsInCart(() => nItemsInCart + 1);
  }
  return (
    <ProductContainer>
      <img src={productData.image} alt="cooler" />
      <DetailsContainer>
        <Title>{productData.name}</Title>
        <Price>
          R$
          {productData.price}
        </Price>
      </DetailsContainer>
      <ButtonsContainer>
        <BuyButton>Buy</BuyButton>
        <CartButton onClick={() => addToCart()} clicked={addItemToCart}>
          {addItemToCart ? <BsCartCheck /> : <BsCartPlus />}

          {addItemToCart && <p> ({nItemsInCart})</p>}
        </CartButton>
      </ButtonsContainer>
    </ProductContainer>
  );
}

const ProductContainer = styled.li`
  img {
    height: 150px;
    width: 100%;
    border-radius: 4px 4px 0 0;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
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
  background-color: ${({ clicked }) => (clicked ? '#89d800' : '#0087d4')};
  border-radius: 0 0 4px 0;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
  }
`;
