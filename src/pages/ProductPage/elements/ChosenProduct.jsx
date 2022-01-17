import React from 'react';
import styled from 'styled-components';
import StyledButton from '../../../components/buttons/StyledButton';

export default function ChosenProduct({ product }) {
  console.log(product);
  return (
    <ProductContainer>
      <InnerWrapper>
        <ImageContainer>
          <img src={product.image} alt={product.name} />
        </ImageContainer>
        <ProductDetailsContainer>
          <div>
            <h1>{product.name}</h1>
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
              {product.stock > 5
                ? 'In stock'
                : `Only ${product.stock} available!`}
            </Stock>
          </StockInfoContainer>

          <ButtonContainer>
            <StyledButton color="#0087d4">Add to cart</StyledButton>
            <StyledButton>Buy</StyledButton>
          </ButtonContainer>
        </ProductDetailsContainer>
      </InnerWrapper>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 100%;
  min-height: 500px;

  padding-top: 50px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 80%;
  min-height: 200px;
  margin: 0 auto;

  @media (max-width: 600px) {
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
`;

const ProductDetailsContainer = styled.div`
  height: 450px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 15px;

  h1 {
    display: inline-block;
    font-size: 58px;
    font-weight: bold;
  }

  p {
    display: inline-block;
    margin-top: 15px;
    text-align: justify;
  }
`;

const Price = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #76b900;
  margin-top: 25px;
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
`;

const Stock = styled.span`
  margin-left: 15px;
  color: ${({ lowStock }) => (lowStock ? '#fcff55' : '#9cfd7f')};
`;
