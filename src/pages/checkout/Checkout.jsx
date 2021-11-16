import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import PageContainer from '../../components/containers/PageContainer';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ContentContainer from '../../components/containers/ContentContainer';
import Item from './elements/Item';
import CartContext from '../../contexts/CartContext';
import { getSelectedProducts } from '../../services/services';
import StyledButton from '../../components/buttons/StyledButton';
import { useHistory } from 'react-router';
import CheckoutForm from './elements/CheckoutForm';

export default function Checkout() {
  const [chosenItems, setChosenItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { cart } = useContext(CartContext);
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);

  function redirectOrProceed() {
    if (cart.length < 1) return;
    // if user is logged in, proceed to checkout
    setShowForm(true);
    // history.push('/sign-in');
  }

  function addAmount(product) {
    return {
      ...product,
      amount: cart.filter((id) => id === product.id).length,
    };
  }

  function calculateTotal(productList) {
    setTotal(
      productList.reduce(
        (acc, product) => acc + product.price * product.amount,
        0
      )
    );
  }

  useEffect(() => {
    if (cart.length > 0) {
      getSelectedProducts([...new Set(cart)])
        .then((response) => {
          let productsData = response.data;
          productsData = productsData.map(addAmount);

          calculateTotal(productsData);
          setChosenItems(productsData);
        })
        .catch((error) => console.log(error.response));
    }
  }, [cart]);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <Table>
          <thead>
            <HeadRow>
              <ProductColumn>Product</ProductColumn>
              <TableColumn>Amount</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Total</TableColumn>
            </HeadRow>
          </thead>
          <tbody>
            {chosenItems.length ? (
              chosenItems.map((product) => (
                <Item
                  product={product}
                  setChosenItems={setChosenItems}
                  calculateTotal={calculateTotal}
                  chosenItems={chosenItems}
                  key={product.id}
                />
              ))
            ) : (
              <MessageContainer>
                <td>Oops, your cart is empty</td>
              </MessageContainer>
            )}
          </tbody>
          <tfoot>
            <FooterRow>
              <Total>
                <span>Total</span>
                <p>R${total}</p>
              </Total>
            </FooterRow>
          </tfoot>
        </Table>
        <ButtonContainer>
          {!showForm && (
            <StyledButton onClick={() => redirectOrProceed()}>
              Go to checkout
            </StyledButton>
          )}
        </ButtonContainer>
        {showForm && <CheckoutForm chosenItems={chosenItems} />}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const Table = styled.table`
  margin: 20px auto;
  width: 50%;
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

  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

const MessageContainer = styled.tr`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #747474;

  td {
    margin: 0 auto;
  }
`;

const HeadRow = styled.tr`
  height: 30px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  border-bottom: 1px solid #a8a8a8;
  font-size: 15px;

  @media (max-width: 700px) {
    font-size: 13px;
  }
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

const FooterRow = styled.tr`
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

  @media (max-width: 700px) {
    font-size: 15px;
  }

  span {
    font-weight: 700;
  }

  p {
    font-weight: 700;
    color: #76b900;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
