/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable brace-style */
/* eslint-disable indent */
/* eslint-disable semi */
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/containers/PageContainer';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContentContainer from '../../components/containers/ContentContainer';
import Item from './elements/Item';
import CartContext from '../../contexts/CartContext';
import { getSelectedProducts } from '../../services/services';

export default function Checkout() {
  const [chosenItems, setChosenItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);

  function addAmount(product) {
    return {
      ...product,
      amount: cart.filter((id) => id === product.id).length,
    };
  }

  useEffect(() => {
    getSelectedProducts([...new Set(cart)])
      .then((response) => {
        let productsData = response.data;
        console.log(productsData);
        // eslint-disable-next-line max-len
        productsData = productsData.map(addAmount);
        setTotal(
          productsData.reduce(
            (acc, product) => acc + product.price * product.amount,
            0
          )
        );
        setChosenItems(productsData);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <Table>
          <TableHeader>
            <ProductColumn>Product</ProductColumn>
            <TableColumn>Amount</TableColumn>
            <TableColumn>Unit Price</TableColumn>
            <TableColumn>Total</TableColumn>
          </TableHeader>
          {chosenItems.map((product) => (
            <Item product={product} key={product.id} />
          ))}
          <TableFooter>
            <Total>
              <span>Total</span>
              <p>
                $
                {total}
              </p>
            </Total>
          </TableFooter>
        </Table>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const Table = styled.table`
  margin: 20px auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  background-color: #242424;
  border-radius: 4px;
  padding: 10px;

  p {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

const TableHeader = styled.tr`
  height: 30px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  border-bottom: 1px solid #a8a8a8;
  font-size: 18px;
`;

const TableColumn = styled.th`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  margin: 0 5px;
`;

const ProductColumn = styled.th`
  width: 55%;
  display: flex;
`;

const TableFooter = styled.tr`
  border-top: 1px solid #a8a8a8;
  height: 60px;
  margin: 5px;
  display: flex;
  align-items: center;
`;

const Total = styled.td`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;

  span {
    font-weight: 700;
  }

  p {
    font-weight: 700;
    color: #76b900;
  }
`;
