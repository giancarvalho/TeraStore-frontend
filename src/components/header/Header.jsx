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
  const history = useHistory();

  function menuOrLoginPage() {
    if (isSignedIn) {
      setOpenMenu(!openMenu);
      return;
    }

    history.push('/sign-in');
  }

  function signOut(e) {
    e.stopPropagation();
    // call signout function bellow
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
            key="key"
            in={openMenu}
            timeout={150}
            classNames="usermenu"
            unmountOnExit
          >
            <UserMenuContainer>
              <MenuOptions>
                <Option onClick={(e) => signOut(e)} role="button" tabindex="-1">Sign out</Option>
              </MenuOptions>
            </UserMenuContainer>
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


  @media(max-width: 600px){
    padding: 0 5px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`;

const MenuButton = styled(ActionButton)`
  margin: 0 10px;

  @media(max-width: 600px){

    min-height: 30px;
    min-width: auto;
    font-size: 16px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: #000;

  .usermenu-enter {
    bottom: 0;
  }
  .usermenu-enter-active {
    bottom: -40px;
    transition: bottom 200ms;
  }
  .usermenu-exit {
    bottom: -40px;
  }
  .usermenu-exit-active {
    bottom: 0;
    transition: bottom 200ms;
  }
`;

const LoginButton = styled(ActionButton)`
  height: auto;
  width: auto;
  color: #fff;
  background-color: transparent;
  margin-right: 20px;
  position: relative;
  background-color: #000;

  border: ${({ isSignedIn }) => (isSignedIn ? '1px solid rgba(255 ,255 ,255, 0.1)' : 'none')};

  p {
    font-size: 14px;
    margin-left: 10px;
  }

  @media(max-width: 600px){
   margin-right: 0;
  }
`;

const CartButton = styled(ActionButton)`
  width: 50px;
  position: relative;

  @media(max-width: 600px){
    position: fixed;
    bottom: 30px;
    right: 15px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    font-size: 50px;
  }
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

  @media(max-width: 600px){
    height: 30px;
    width: 30px;
  }
`;

const UserMenuContainer = styled.div`
  z-index: -1;
  background-color: #141414;
  bottom: -35px;
  position: absolute;
  right: 0;
  left: 0;
  font-size: 14px;
  border-radius: 0 0 4px 4px;
`;

const MenuOptions = styled.div`
  padding: 10px 0;
`;

const Option = styled.div`
  background-color: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  width: 100%;
`;
