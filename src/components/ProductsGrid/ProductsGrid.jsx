import React from 'react';
import styled from 'styled-components';
import ProductCard from './elements/ProductCard';

export default function ProductsGrid() {
  return (
    <GridContainer>
      <h1>New Releases</h1>
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-gap: 25px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 150px);
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
