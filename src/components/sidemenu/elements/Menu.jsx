import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import ActionButton from '../../buttons/ActionButton';
import TeraStore from '../../logo/Logo';
import Loader from 'react-loader-spinner';

function Menu({ setOpenSideMenu, categoriesList }) {
  Menu.handleClickOutside = () => setOpenSideMenu(false);
  return (
    <MenuContainer>
      <MenuHeaderContainer>
        <TeraStore />
        <CloseMenu fontSize="24px" onClick={() => setOpenSideMenu(false)}>
          <AiOutlineClose />
        </CloseMenu>
      </MenuHeaderContainer>
      {categoriesList ? (
        <CategoriesContainer>
          {categoriesList.map((category) => (
            <Link
              to={`/category/${category.id}`}
              key={category.id}
              onClick={() => setOpenSideMenu(false)}
            >
              <Category>{category.name}</Category>
            </Link>
          ))}{' '}
        </CategoriesContainer>
      ) : (
        <LoaderContainer>
          <Loader type="ThreeDots" color="#fdfdfd" height={60} width={60} />
        </LoaderContainer>
      )}
    </MenuContainer>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Menu.handleClickOutside,
};

export default onClickOutside(Menu, clickOutsideConfig);

const MenuContainer = styled.nav`
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
  align-items: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const CategoriesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  padding-top: 15px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const CloseMenu = styled(ActionButton)`
  background-color: transparent;
  color: #fff;
  transition: all 250ms ease-in-out;
  margin-left: 10px;
  :hover {
    background-color: #ffffff;
    color: #000;
  }

  @media (max-width: 600px) {
    min-height: 30px;
    min-width: auto;
    font-size: 16px;
  }
`;

const Category = styled.li`
  margin: 8px 0;
  text-transform: capitalize;
`;
