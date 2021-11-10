import React from 'react';
import styled from 'styled-components';
import ProductCard from './elements/ProductCard';

export default function ProductsGrid({ productsList }) {
  // pass an array with products
  return (
    <GridContainer>
      <h1>New Releases</h1>
      <ProductsContainer>
        {productsList.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ProductsContainer>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 70%;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 500px) {
    width: 100%;

    h1 {
      margin-left: 20px;
    }
  }
`;

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 160px);
  grid-gap: 20px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, 160px);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 150px);
    grid-gap: 15px;
    justify-content: center;
  }
`;
