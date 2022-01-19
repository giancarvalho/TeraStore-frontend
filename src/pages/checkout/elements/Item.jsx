import React, { useState } from 'react';
import styled from 'styled-components';
import CartContext from '../../../contexts/CartContext';
import { useContext } from 'react';
import {
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import ActionButton from '../../../components/buttons/ActionButton';
import { Link } from 'react-router-dom';

export default function Item({
  product,
  setChosenItems,
  calculateTotal,
  chosenItems,
}) {
  const [value, setValue] = useState(product.amount);
  const { image, name, price, amount } = product;
  const { addToCart, deleteFromCart } = useContext(CartContext);

  function controlAmount(operation) {
    let newValue;

    if (operation === 'add') {
      newValue = value + 1;
      addToCart(product.id);
    } else {
      newValue = value - 1;
      if (newValue < 1) return;
      deleteFromCart(product.id, 1);
    }

    product.amount = newValue;
    setValue(newValue);
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
        <Link to={`/category/${product.category_id}/product/${product.id}`}>
          <img src={image} alt={name} />
        </Link>
        {product.name}
      </Td>
      <Td>
        <AmountButton onClick={() => controlAmount('subtract')}>
          <AiOutlineMinusCircle />
        </AmountButton>
        {value}
        <AmountButton onClick={() => controlAmount('add')}>
          <AiOutlinePlusCircle />
        </AmountButton>
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
    background-color: #fff;
  }
  :hover {
    background-color: #414141;
    border-radius: 4px;
  }

  @media (max-width: 700px) {
    font-size: 12px;

    img {
      width: 35px;
      height: 35px;
      margin: 10px;
    }
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: transparent;
  color: #ffffff;
  margin-left: -10px;

  :hover {
    color: #f42929;
  }

  @media (max-width: 700px) {
    font-size: 16px;
    position: absolute;
    left: 0;
    bottom: calc(50% - 16px);
  }
`;

const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 15%;
  margin: 0 7px;
  text-transform: capitalize;

  :first-child {
    width: 55%;
    justify-content: flex-start;
    text-align: center;
  }

  @media (max-width: 700px) {
    :first-child {
      flex-direction: column;
    }
  }
`;

const AmountButton = styled(ActionButton)`
  background-color: transparent;
  color: #fff;
  min-width: auto;
  min-height: auto;
  font-size: 20px;
  margin: 0 5px;

  @media (max-width: 700px) {
    font-size: 16px;
    padding: 0;
  }
`;
