import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

function StatesDropDown({ list, setData, data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [chosenOption, setChosenOption] = useState(null);

  console.log(data);

  function chooseState(e, state, id) {
    e.stopPropagation();

    setData({ ...data, stateId: id });
    setChosenOption(state);
    setIsClicked(false);
  }

  return (
    <StateContainer onClick={() => setIsClicked(!isClicked)}>
      <div>
        {chosenOption || 'State'} <ArrowDown className="icon" />
      </div>
      {isClicked && (
        <StateOptionsContainer>
          {list.map((state) => (
            <li
              onClick={(e) => chooseState(e, state.name, state.id)}
              key={state.id}
            >
              {state.name}
            </li>
          ))}
        </StateOptionsContainer>
      )}
    </StateContainer>
  );
}

export default StatesDropDown;

const StateContainer = styled.div`
  width: 25%;
  height: 36px;
  border-radius: 4px;
  background: #424242;
  color: #fff;
  padding: 8px;
  margin: 8px 8px;
  font-family: Roboto;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  div {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 600px) {
    height: 28px;
    font-size: 12px;
  }
`;

const ArrowDown = styled(AiOutlineArrowDown)`
  font-size: 26px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const StateOptionsContainer = styled.ul`
  max-height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  position: absolute;
  font-weight: 400;
  top: 100%;
  left: 0;
  right: 0;
  background: #424242;
  border-radius: 0 0 4px 4px;
  padding: 5px;
  overflow-y: scroll;
  li {
    margin-bottom: 7px;
  }

  @media (max-width: 600px) {
    height: 6vh;
    font-size: 12px;
  }
`;
