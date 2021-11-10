import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
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
        <LoginButton>
          <FaUserCircle />
        </LoginButton>
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
  width: 200px;
`;

const MenuButton = styled(ActionButton)`
  margin: 0 10px;
`;

const RightContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`;

const LoginButton = styled(ActionButton)`
  height: auto;
  width: auto;
  color: #fff;
  background-color: transparent;
  font-size: 40px;
  border-radius: 50%;
`;
