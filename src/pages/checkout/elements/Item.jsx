import React, { useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../../contexts/CartContext';
import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ActionButton from '../../../components/buttons/ActionButton';

export default function Item({
  product,
  setChosenItems,
  calculateTotal,
  chosenItems,
}) {
  const [value, setValue] = useState(product.amount);
  const { image, name, price, amount } = product;
  const { addToCart, deleteFromCart } = useContext(CartContext);

  function controlAmount(e) {
    if (e.target.value < 0) return;

    if (e.target.value > product.amount) {
      addToCart(product.id);
    } else {
      if (e.target.value > 1) {
        deleteFromCart(product.id, 1);
      }
    }
    product.amount = e.target.value;
    setValue(e.target.value);
  }

  function deleteItem() {
    const newItemList = chosenItems.filter((item) => item.id !== product.id);
    deleteFromCart(product.id, amount);
    setChosenItems(newItemList);
    calculateTotal(newItemList);
  }

  return (
    <TableContent>
      <Td>
        <DeleteButton onClick={() => deleteItem()}>
          <AiFillDelete />
        </DeleteButton>
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
  flex: 1 1 60px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;

  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    margin-right: 10px;
  }
  :hover {
    background-color: #414141;
    border-radius: 4px;
  }

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: transparent;
  color: #ffffff;
  margin-left: -10px;

  :hover {
    color: #f42929;
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
