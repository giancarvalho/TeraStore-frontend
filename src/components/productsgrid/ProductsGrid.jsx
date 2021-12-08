import React from 'react';
import styled from 'styled-components';
import ProductCard from './elements/ProductCard';
import Loader from 'react-loader-spinner';
import LoaderContainer from '../containers/LoaderContainer';

export default function ProductsGrid({ productsList, name }) {
  // pass an array with products
  return (
    <GridContainer>
      <h1>{name}</h1>
      {!productsList ? (
        <LoaderContainer>
          <Loader type="TailSpin" color="#e9e9e9" height={80} width={80} />
        </LoaderContainer>
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
