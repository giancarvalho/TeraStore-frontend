import React, { useEffect, useState } from 'react';
import PageContainer from '../../components/containers/PageContainer';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/containers/ContentContainer';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../services/services';
import ChoseProduct from './elements/ChosenProduct';
import DefaultLoader from '../../components/others/DefaultLoader';
import OtherProducts from './elements/OtherProducts';

export default function ProductPage() {
  const { categoryId, productId } = useParams();
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState({ name: '', products: [] });

  useEffect(() => {
    getCategoryProducts(categoryId).then((response) => {
      const products = response.data.products.filter((product) => {
        if (product.id === +productId) {
          setProduct(product);
          return false;
        }

        return true;
      });

      setCategory({ ...response.data, products });
    });
  }, [categoryId, productId]);

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        {product ? <ChoseProduct product={product} /> : <DefaultLoader />}

        {/* {category.products.length > 0 && <OtherProducts category={category} />} */}
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}
