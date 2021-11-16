import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import Footer from '../components/footer/Footer';
import ContentContainer from '../components/containers/ContentContainer';
import ProductsGrid from '../components/productsgrid/ProductsGrid';
import { getCategoryProducts } from '../services/services';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function Category() {
  const [categoryData, setCategoryData] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    getCategoryProducts(categoryId).then((response) =>
      setCategoryData(response.data)
    );
  }, [categoryId]);

  return (
    <PageContainer>
      <Header />
      <Container>
        {categoryData && (
          <ProductsGrid
            productsList={categoryData.products}
            name={categoryData.name}
          />
        )}
      </Container>
      <Footer />
    </PageContainer>
  );
}

const Container = styled(ContentContainer)`
  padding-top: 25px;
`;
