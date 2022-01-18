import styled from 'styled-components';

const ProductContainer = styled.li`
  width: 235px;

  img {
    height: 240px;
    width: 100%;
    border-radius: 4px 4px 0 0;
    object-fit: cover;
    background-color: #fff;
  }

  @media (max-width: 700px) {
    width: 175px;

    img {
      height: 150px;
    }
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  background-color: #1c1c1c;
`;

const Title = styled.h2`
  font-size: 19px;
  text-transform: capitalize;
  margin-bottom: 5px;
  line-height: 22px;
  text-align: center;
`;

const Price = styled.p`
  font-size: 19px;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  button {
    border: none;
    height: 36px;
    font-weight: 700;

    cursor: pointer;

    :hover {
      filter: brightness(1.25);
    }
  }
`;

const BuyButton = styled.button`
  width: 55%;
  background-color: #76b900;
  border-radius: 0 0 0 4px;
  font-size: 18px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const CartButton = styled.button`
  width: 45%;
  background: linear-gradient(to right, #0087d4 50%, #00d9ff 50%) left;
  background-size: 200%;
  background-position: ${({ clicked }) => (clicked ? 'right' : 'left')};
  transition: 0.2s ease-out;
  font-size: 24px;
  border-radius: 0 0 4px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-enter {
    opacity: 0;
  }
  .icon-exit {
    opacity: 1;
  }
  .icon-exit-active {
    opacity: 0;
    transition: opacity 150ms ease-out;
  }
  .icon-enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in;
  }

  p {
    display: inline-block;
    font-size: 12px;
  }
`;

export {
  ProductContainer,
  CartButton,
  BuyButton,
  ButtonsContainer,
  DetailsContainer,
  Price,
  Title,
};
