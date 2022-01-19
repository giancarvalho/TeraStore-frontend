import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from './MenuArrows';
import React from 'react';

function ProductCard({ product }) {
  const { categoryId } = useParams();

  return (
    <CardContainer>
      <Link to={`/category/${categoryId}/product/${product.id}`}>
        <ProductImage src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </Link>
    </CardContainer>
  );
}

// #TODO adicionar efeito de transição entre paginas
// #TODO adaptação para mobile
export default function OtherProducts() {
  const { categoryId } = useParams();
  const category = {
    name: 'Monitors',
    products: [
      {
        id: 8,
        name: 'Monitor LG 27 IPS',
        price: '1200.00',
        category_id: 3,
        image:
          'https://www.lg.com/br/images/monitores/md06183578/2_Gallery/DM_01.jpg',
        stock: 15,
      },
      {
        id: 10,
        name: 'Monitor LED AOC 21.5',
        price: '250.00',
        category_id: 3,
        image: 'https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg',
        stock: 15,
      },
      {
        id: 8,
        name: 'Monitor LG 27 IPS',
        price: '1200.00',
        category_id: 3,
        image:
          'https://www.lg.com/br/images/monitores/md06183578/2_Gallery/DM_01.jpg',
        stock: 15,
      },
      {
        id: 10,
        name: 'Monitor LED AOC 21.5',
        price: '250.00',
        category_id: 3,
        image: 'https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg',
        stock: 15,
      },
      {
        id: 8,
        name: 'Monitor LG 27 IPS',
        price: '1200.00',
        category_id: 3,
        image:
          'https://www.lg.com/br/images/monitores/md06183578/2_Gallery/DM_01.jpg',
        stock: 15,
      },
      {
        id: 10,
        name: 'Monitor LED AOC 21.5',
        price: '250.00',
        category_id: 3,
        image: 'https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg',
        stock: 15,
      },
      {
        id: 8,
        name: 'Monitor LG 27 IPS',
        price: '1200.00',
        category_id: 3,
        image:
          'https://www.lg.com/br/images/monitores/md06183578/2_Gallery/DM_01.jpg',
        stock: 15,
      },
      {
        id: 10,
        name: 'Monitor LED AOC 21.5',
        price: '250.00',
        category_id: 3,
        image: 'https://i.zst.com.br/thumbs/12/1b/13/19223911.jpg',
        stock: 15,
      },
    ],
  };
  return (
    <GridContainer>
      <h4>
        More products in{' '}
        <Link to={`/category/${categoryId}`}>{category.name}</Link>
      </h4>

      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{ width: '100%', backgroundColor: 'purple' }}
      >
        {category.products.map((product, index) => (
          <ProductCard product={product} itemId={index} key={index} />
        ))}
      </ScrollMenu>
    </GridContainer>
  );
}

const GridContainer = styled.div`
  padding: 0 50px 50px 50px;

  h4 {
    font-size: 28px;
    margin-bottom: 20px;

    a {
      font-style: italic;
      text-transform: capitalize;

      :hover {
        color: #b9b9b9;
      }
    }
  }

  p {
    text-align: center;
    margin-top: 10px;
    text-transform: capitalize;
  }

  @media (max-width: 530px) {
    padding: 0 20px 50px 20px;
    h4 {
      text-align: center;
    }
  }
`;

const ProductsList = styled(ScrollMenu)`
  display: flex;
  background-color: purple;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardContainer = styled.div`
  margin-right: 25px;
`;
const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background-color: #fff;
`;
