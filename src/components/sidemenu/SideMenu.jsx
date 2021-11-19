import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategoriesList } from '../../services/services';
import Menu from './elements/Menu';

export default function SideMenu({ setOpenSideMenu }) {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    getCategoriesList().then((response) => setCategoriesList(response.data));
  }, []);

  return (
    <ModalContainer>
      <Menu categoriesList={categoriesList} setOpenSideMenu={setOpenSideMenu} />
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
