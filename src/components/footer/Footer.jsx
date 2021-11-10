import React from 'react';
import styled from 'styled-components';
import TeraStore from '../logo/Logo';
import acceptedCards from '../../assets/images/acceptedCards.png';

export default function Footer() {
  return (
    <FooterContainer>
      <AuxContainer>
        <TeraStore color="#76b900" />
        <img src={acceptedCards} alt="accepted-cards" />
      </AuxContainer>
      <p>Av.Faria Lima - São Paulo</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-bottom: 10px;
  }

  img {
    height: 35px;
  }

  @media (max-width: 700px) {
    img {
      height: 25px;
      width: 100px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const AuxContainer = styled.div`
  height: 180px;
  width: calc(100% - 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;

    img {
      margin-top: 25px;
    }
  }
`;
