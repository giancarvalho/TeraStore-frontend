import React from 'react';
import styled from 'styled-components';
import ProductCard from './elements/ProductCard';
import DefaultLoader from '../others/DefaultLoader';

export default function ProductsGrid({ productsList, name }) {
  // pass an array with products
  return (
    <GridContainer>
      <h1>{name}</h1>
      {!productsList ? (
        <DefaultLoader />
      ) : (
        <ProductsContainer>
          {productsList.map((product) => (
            <ProductCard key={product.id} productData={product} />
          ))}
        </ProductsContainer>
      )}
    </GridContainer>
  );
}

const GridContainer = styled.main`
  width: 70%;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
    text-transform: capitalize;
  }

  @media (max-width: 700px) {
    width: 100%;

    h1 {
      margin-left: 20px;
    }
  }
`;

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 235px);
  grid-gap: 20px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, 235px);
  }
  @media (max-width: 700px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 175px);
    grid-gap: 15px;
  }
`;
