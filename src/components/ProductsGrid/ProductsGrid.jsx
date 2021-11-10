import React from 'react';
import styled from 'styled-components';
import ProductCard from './elements/ProductCard';

export default function ProductsGrid() {
  return (
    <GridContainer>
      <h1>New Releases</h1>
      <ProductsContainer>
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
  display: flex;
  margin-bottom: 60px;
`;
