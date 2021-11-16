import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import Footer from '../components/footer/Footer';
import ContentContainer from '../components/containers/ContentContainer';
import ProductsGrid from '../components/productsgrid/ProductsGrid';
import { getLastProducts } from '../services/services';
import gpu from '../assets/images/gpu.jpg';

export default function Home() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getLastProducts().then((response) => setProductsList(response.data));
  }, []);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <BannerContainer>
          <Banner src={gpu} alt="gpu" />
        </BannerContainer>
        <ProductsGrid productsList={productsList} name="New Releases" />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    height: 120px;
  }
`;

const Banner = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;

  @media (max-width: 600px) {
    height: 120px;
  }
`;
