import React, { useState } from 'react';
import styled from 'styled-components';

import StyledButton from './StyledButton';

export default function CheckoutForm() {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [payment, setPayment] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const dbStates = [
    {
      id: 1,
      name: 'Minas Gerais',
    },
    {
      id: 2,
      name: 'Rio de Janeiro',
    },
    {
      id: 3,
      name: 'São Paulo',
    },
  ];

  function submitHelper(event) {
    event.preventDefault();
    setIsButtonEnabled(!isButtonEnabled);
  }

  return (
    <Wrapper>
      <form
        onSubmit={
          true ? submitHelper : (e) => e.preventDefault()
        }
      >

        <InputsBox>

          <h1>Address</h1>

          <div>

            <StyledInput
              width="500px"
              type="text"
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
            <StyledInput
              width="86px"
              type="number"
              placeholder="No"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              hideArrows
            />
            <StyledInput
              width="200px"
              type="text"
              placeholder="Complement"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
            <StyledInput
              width="140px"
              type="text"
              maxLength="9"
              placeholder="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
            <StyledInput
              width="300px"
              type="text"
              placeholder="Neighborhood"
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              required
            />
            <StyledInput
              width="340px"
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <StyledInput
              width="300px"
              list="states"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <datalist id="states">
              {dbStates.map((dbState) => <option aria-label="Mute volume" value={dbState.name} />)}
            </datalist>

          </div>

          <StyledInput
            width="300px"
            list="payment"
            placeholder="Payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          />

          <datalist id="payment">
            <option aria-label="Mute volume" value="Cash" />
            <option aria-label="Mute volume" value="Debit Card" />
            <option aria-label="Mute volume" value="Credit Card" />
          </datalist>

        </InputsBox>

        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          Confirm Order
        </StyledButton>

      </form>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 8px 8px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const InputsBox = styled.div`
  width: 1040px;
  height: auto;
  border-radius: 4px;
  background-color: #323232;
  padding: 16px 8px 32px;

  & > * {
    margin-bottom: 64px;
  }
`;

const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : '200px')};
  height: 48px;
  border-radius: 4px;
  border: none;
  background-color: #C4C4C4;
  padding: 8px;
  margin: 8px 8px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;

  &::placeholder {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    color: #000;
  }

  ${(props) => (props.hideArrows ? `
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type=number] {
      -moz-appearance: textfield;
    }` : '')};
`;
