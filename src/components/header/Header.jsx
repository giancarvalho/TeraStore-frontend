import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import TeraStore from '../logo/Logo';
import ActionButton from '../buttons/ActionButton';

export default function Header() {
  const [isSignedIn] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const user = true;
  const history = useHistory();

  function menuOrLoginPage() {
    if (user) {
      setOpenMenu(!openMenu);
      return;
    }

    history.push('/nothing');
  }

  return (
    <HeaderContainer>
      <LeftContainer>
        <MenuButton>
          <AiOutlineMenu />
        </MenuButton>
        <TeraStore />
      </LeftContainer>
      <RightContainer>
        <LoginButton
          fontSize="40px"
          isSignedIn={isSignedIn}
          onClick={() => menuOrLoginPage()}
        >
          <FaUserCircle />
          {isSignedIn && <p>Hi, user</p>}
          <CSSTransition
            key="32165"
            inProp={openMenu}
            timeout={150}
            unmountOnExit
            classNames="showUserMenu"
          >
            <UserMenuContainer>Teste</UserMenuContainer>
          </CSSTransition>
        </LoginButton>
        <CartButton fontSize="35px">
          <CgShoppingCart />
          <ItemCounter>3</ItemCounter>
        </CartButton>
      </RightContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  height: 60px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
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
  display: flex;
  align-items: center;
  justify-content: space-around;

  .showUserMenu-enter {
    bottom: 50px;
  }
  
  .showUserMenu-active {
    bottom: -30px;
    transition: bottom 150ms ease-in;
  }
`;

const LoginButton = styled(ActionButton)`
  height: auto;
  width: auto;
  color: #fff;
  background-color: transparent;
  margin-right: 20px;
  position: relative;

  border: ${({ isSignedIn }) => (isSignedIn ? '1px solid rgba(255 ,255 ,255, 0.1)' : 'none')};

  p {
    font-size: 14px;
    margin-left: 10px;
  }
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

const UserMenuContainer = styled.div`
  background-color: #141414;
  height: 30px;
  position: absolute;
  right: 0;
  left: 0;
  font-size: 14px;
  border-radius: 0 0 4px 4px;
  transition: bottom 150ms ease-in-out;
`;
