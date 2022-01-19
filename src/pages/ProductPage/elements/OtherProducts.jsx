import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// #TODO adicionar efeito de transição entre paginas
// #TODO adaptação para mobile
export default function OtherProducts({ category }) {
  const { categoryId } = useParams();
  return (
    <GridContainer>
      <h4>
        More products in{' '}
        <Link to={`/category/${categoryId}`}>{category.name}</Link>
      </h4>
      <ProductsList>
        {category.products.map((product, index) => (
          <li key={index}>
            <Link to={`/category/${categoryId}/product/${product.id}`}>
              <ProductImage src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          </li>
        ))}
      </ProductsList>
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
`;

const ProductsList = styled.ul`
  display: flex;
  gap: 20px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background-color: #fff;
`;
