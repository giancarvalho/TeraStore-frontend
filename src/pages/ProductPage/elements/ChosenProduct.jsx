import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import StyledButton from '../../../components/buttons/StyledButton';
import CartContext from '../../../contexts/CartContext';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';

export default function ChosenProduct({ product }) {
  const [isAddBtnClicked, setIsAddButtonClicked] = useState(false);
  const { addToCart, cart } = useContext(CartContext);
  const chosenProductInCart = cart.filter((item) => item.id === product.id);
  const [nItemsInCart, setnItemsInCart] = useState(chosenProductInCart.length);
  const history = useHistory();

  function addItem() {
    if (nItemsInCart + 1 > product.stock) {
      toast.warn(`You reached the limit for this item.`);
      return;
    }

    addToCart(product.id);
    setnItemsInCart(() => nItemsInCart + 1);
    triggerAddButton();
  }

  function triggerAddButton() {
    setIsAddButtonClicked(true);
    setTimeout(() => setIsAddButtonClicked(false), 3500);
  }

  function buyItem() {
    if (nItemsInCart + 1 > product.stock) {
      toast.warn(`You reached the limit for this item.`);
      history.push('/checkout');
      return;
    }

    addToCart(product.id);
    history.push('/checkout');
  }

  return (
    <ProductContainer>
      <InnerWrapper>
        <ImageContainer>
          <img src={product.image} alt={product.name} />
        </ImageContainer>
        <ProductDetailsContainer>
          <div>
            <Name>{product.name}</Name>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          <StockInfoContainer>
            <Price>R$ {product.price}</Price>
            <Stock lowStock={product.stock <= 5}>
              {product.stock > 5 ? 'In stock' : `Only ${product.stock} left!`}
            </Stock>
          </StockInfoContainer>

          <ButtonContainer>
            <StyledButton onClick={() => buyItem()}>Buy</StyledButton>
            <AddButton onClick={() => addItem()}>
              <AddedBtnText isClicked={isAddBtnClicked}>
                Added <CheckIcon />
              </AddedBtnText>
              <AddBtnText isClicked={isAddBtnClicked}>Add to cart</AddBtnText>
            </AddButton>
          </ButtonContainer>
        </ProductDetailsContainer>
      </InnerWrapper>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 50px 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 80%;
  min-height: 200px;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  height: 450px;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 500px;
    border-radius: 4px;
    background-color: #fff;
  }

  @media (max-width: 700px) {
    justify-content: center;
    width: 100%;
    height: 350px;

    img {
      width: 100%;
    }
  }
`;

const ProductDetailsContainer = styled.div`
  height: 450px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  p {
    display: inline-block;
    margin-top: 15px;
    text-align: justify;
  }

  @media (max-width: 700px) {
    gap: 15px;
    justify-content: flex-start;

    p {
      font-size: 14px;
    }
  }
`;

const Name = styled.h1`
  display: inline-block;
  font-size: 58px;
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const Price = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #76b900;
  margin-top: 25px;

  @media (max-width: 700px) {
    margin-top: 15px;
    font-size: 2.3rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;

const StockInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Stock = styled.span`
  margin-left: 15px;
  color: ${({ lowStock }) => (lowStock ? '#fcff55' : '#9cfd7f')};
`;

const AddButton = styled(StyledButton)`
  background-color: #0087d4;
  position: relative;
`;
const AddBtnText = styled.span`
  display: ${({ isClicked }) => (isClicked ? 'none' : 'initial')};
`;

const AddedBtnText = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isClicked }) => (isClicked ? '1' : '0')};
  visibility: ${({ isClicked }) => (isClicked ? '1' : 'hidden')};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 200ms ease-in;
`;

const CheckIcon = styled(BsCartCheck)`
  margin-left: 10px;
`;
