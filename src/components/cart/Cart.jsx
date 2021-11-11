import React, { useContext } from 'react';
import styled from 'styled-components';
import { CgShoppingCart } from 'react-icons/cg';
import ActionButton from '../buttons/ActionButton';
import CartContext from '../../contexts/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <CartButton fontSize="35px">
      <CgShoppingCart />
      <ItemCounter>{cart.length}</ItemCounter>
    </CartButton>
  );
}

const CartButton = styled(ActionButton)`
  width: 50px;
  position: relative;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 30px;
    right: 15px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    font-size: 50px;
  }
`;

const ItemCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 16px;
  background-color: #29aaf4;
  color: #000;
  border-radius: 50%;

  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;
