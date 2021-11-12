import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import ActionButton from '../buttons/ActionButton';
import TeraStore from '../logo/Logo';

export default function SideMenu({ setOpenSideMenu }) {
  const [categoriesList, setCategoriesList] = useState([]);
  const list = [
    'keyboard',
    'ram',
    'stuff',
    'stuff2',
    'more stuff',
    'pc gamers',
    'dildos',
  ];

  useEffect(() => {
    // substitute here for api call
    setCategoriesList(list);
  }, []);

  return (
    <ModalContainer>
      <MenuContainer>
        <MenuHeaderContainer>
          <TeraStore />
          <CloseMenu fontSize="24px" onClick={() => setOpenSideMenu(false)}>
            <AiOutlineClose />
          </CloseMenu>
        </MenuHeaderContainer>
        <CategoriesContainer>
          {categoriesList.map((categoryName) => (
            <Link to={`category/${categoryName}`}>
              <Category>{categoryName}</Category>
            </Link>
          ))}
        </CategoriesContainer>
      </MenuContainer>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.589);
`;
const MenuContainer = styled.nav`
  width: 20%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #131313;
  padding: 20px 10px;
  box-sizing: border-box;

  a:hover {
    color: #b9b9b9;
  }
`;

const MenuHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CategoriesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  padding-top: 15px;
`;

const CloseMenu = styled(ActionButton)`
  background-color: transparent;
  color: #fff;
  transition: all 250ms ease-in-out;
  :hover {
    background-color: #ffffff;
    color: #000;
  }
`;

const Category = styled.li`
  margin: 8px 0;
  text-transform: capitalize;
`;
