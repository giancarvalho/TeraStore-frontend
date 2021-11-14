import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/containers/PageContainer';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContentContainer from '../../components/containers/ContentContainer';
import Item from './elements/Item';
import CartContext from '../../contexts/CartContext';

export default function Checkout() {
  const [chosenItems, setChosenItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);

  console.log(cart);

  const mockedCheckout = [
    {
      amount: 2,
      details: {
        id: 1,
        name: 'Cadeira Gamer AKRacing Branca',
        image:
          'https://patoloco.com.br/arquivos/produtos/imagens_adicionais/2cb40fe4f19553e2f92c2d92c3577d88a62dfa15.jpeg',
        price: 2349.9,
      },
    },
    {
      amount: 1,
      details: {
        id: 2,
        name: 'Teclado Razer Huntsman Preto',
        image:
          'https://a-static.mlcdn.com.br/1500x1500/teclado-razer-gamer-huntsman-mini-preto-60/mbeletronicospalhoca/15fb3e1ea8fc11eba0834201ac18500e/2ad7dc2000d278360c678e4795e4fbff.jpg',
        price: 1399,
      },
    },
    {
      amount: 3,
      details: {
        id: 3,
        name: 'Mouse Razer Basilisk RGB',
        image:
          'https://ae01.alicdn.com/kf/H58c503ee5a9644c495231bbe5a3e5123m/Razer-basilisk-ultimate-edition-gaming-mouse-sem-fio-20000dpi-rgb-base-de-hipervelocidade-tecnologia-sem-fio.jpg_Q90.jpg_.webp',
        price: 899.9,
      },
    },
  ];

  useEffect(() => {
    setTotal(
      mockedCheckout.reduce(
        (acc, curr) => acc + curr.details.price * curr.amount,
        0,
      ),
    );
    setChosenItems(mockedCheckout);
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
            <Item product={product} key={product.details.id} />
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
