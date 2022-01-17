import React, { useEffect, useState } from 'react';
import PageContainer from '../../components/containers/PageContainer';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/containers/ContentContainer';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../services/services';
import ChoseProduct from './elements/ChosenProduct';

export default function ProductPage() {
  const { categoryId, productId } = useParams();
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState({});

  useEffect(() => {
    getCategoryProducts(categoryId).then((response) => {
      const products = response.data.products;
      setCategory(response.data);
      setProduct(products.find((product) => product.id === +productId));
    });
  }, [categoryId, productId]);

  console.log(product);
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <ChoseProduct product={product} />
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
