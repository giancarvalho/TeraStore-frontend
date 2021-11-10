import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function CheckoutTable() {
  const [total, setTotal] = useState(0);
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
      amount: 1,
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
    setTotal(mockedCheckout.reduce((acc, curr) => acc + curr.details.price * curr.amount, 0));
  }, [mockedCheckout]);

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Product</th>
          <th>Amount</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {mockedCheckout.map((product) => (
          <tr key={product.details.id}>
            <td>
              <img src={product.details.image} alt={product.details.name} />
              <span>{product.details.name}</span>
            </td>
            <td>
              <span>{product.amount}</span>
            </td>
            <td>
              <span>{product.details.price.toFixed(2)}</span>
            </td>
            <td>
              <span>{(product.details.price * product.amount).toFixed(2)}</span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <span>Total</span>
          </td>
          <td>
            <StyledPrice>{total.toFixed(2)}</StyledPrice>
          </td>
        </tr>
      </tfoot>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 1040px;
  height: auto;
  border-radius: 4px;
  background-color: #323232;
  padding: 8px;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;

  img {
    width: 48px;
    height: 48px;
    margin: 0px 8px;
    border-radius: 4px;
  }

  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  th:first-child{
    width: calc(100% - 450px);
    padding-left: 64px;
    justify-content: left;
  }

  td:first-child {
    width: calc(100% - 450px);
    justify-content: left;
  }

  td {
    width: 150px;
    margin: 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  th {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }

  tfoot tr {
    width: 240px;
    margin-top: 16px;
    margin-left: calc(100% - 240px);
    font-weight: 700;
  }
`;

const StyledPrice = styled.span`
  color: #76b900;
`;
