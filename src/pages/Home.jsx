import React, { useEffect, useState } from 'react';

import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import Footer from '../components/footer/Footer';
import ContentContainer from '../components/containers/ContentContainer';
import ProductsGrid from '../components/productsgrid/ProductsGrid';
import { getLastProducts } from '../services/services';
import corsair from '../assets/images/corsair.webp';
import monitor from '../assets/images/monitor.png';
import geforce from '../assets/images/geforce.jpg';
import Banner from '../components/banners/Banner';

export default function Home() {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    getLastProducts().then((response) => setProductsList(response.data));
  }, []);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <Banner imageList={[monitor, corsair, geforce]} />

        <ProductsGrid productsList={productsList} name="New Releases" />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
