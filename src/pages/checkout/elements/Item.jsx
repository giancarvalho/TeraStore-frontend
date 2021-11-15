import React, { useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../../contexts/CartContext';
import { useContext } from 'react';

export default function Item({ product }) {
  const [value, setValue] = useState(product.amount);
  const { image, name, price, amount } = product;
  const { addToCart, deleteFromCart } = useContext(CartContext);

  function controlAmount(e) {
    if (e.target.value < 1) return;

    if (e.target.value > product.amount) {
      addToCart(product.id);
    } else {
      deleteFromCart(product.id, 1);
    }
    product.amount = e.target.value;
    setValue(e.target.value);
  }

  return (
    <TableContent>
      <Td>
        <img src={image} alt={name} />
        Cadeira gamer
      </Td>
      <Td>
        <SelectAmount
          value={value}
          type="number"
          onChange={(e) => controlAmount(e)}
        />
      </Td>
      <Td>{price}</Td>
      <Td>{price * amount}</Td>
    </TableContent>
  );
}

const TableContent = styled.tr`
  flex: 1 1 50px;
  margin: 5px;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

const SelectAmount = styled.input`
  width: 50%;
  max-width: 60px;
  background-color: #2f2f2f;
  color: #fff;
  border-radius: 4px;
  border: none;
  text-align: center;
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  margin: 0 7px;

  :first-child {
    width: 55%;
    justify-content: flex-start;
  }
`;