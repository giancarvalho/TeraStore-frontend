import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import TeraStore from '../logo/Logo';
import ActionButton from '../buttons/ActionButton';

export default function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <MenuButton>
          <AiOutlineMenu />
        </MenuButton>
        <TeraStore />
      </LeftContainer>
      <RightContainer>
        <LoginButton fontSize="40px">
          <FaUserCircle />
        </LoginButton>
        <CartButton fontSize="35px">
          <CgShoppingCart />
          <ItemCounter>3</ItemCounter>
        </CartButton>
      </RightContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const MenuButton = styled(ActionButton)`
  margin: 0 10px;
`;

const RightContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LoginButton = styled(ActionButton)`
  height: auto;
  width: auto;
  color: #fff;
  background-color: transparent;
  border-radius: 50%;
`;

const CartButton = styled(ActionButton)`
  width: 50px;
  position: relative;
`;

const ItemCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 16px;
  background-color: #29aaf4;
  color: #000;
  border-radius: 50%;
`;
