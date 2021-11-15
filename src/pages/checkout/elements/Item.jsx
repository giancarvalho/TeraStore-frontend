import React, { useState } from 'react';
import styled from 'styled-components';

export default function Item({ product }) {
  const [value, setValue] = useState(product.amount);
  const {
    image, name, price, amount
  } = product;

  function controlAmount(e) {
    if (e.target.value < 1) return;
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

  :first-child {
    width: 55%;
    justify-content: flex-start;
  }
`;
