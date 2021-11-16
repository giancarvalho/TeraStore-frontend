import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../../../components/buttons/StyledButton';
import CartContext from '../../../contexts/CartContext';
import UserContext from '../../../contexts/UserContext';
import { getFormDetails, sendOrder } from '../../../services/services';
import { saveCartToStorage } from '../../../utils/cart/cart';
import addressSchema from '../../../validation/addressSchema';

export default function CheckoutForm({ chosenItems, sendAlert }) {
  const [states, setStates] = useState([]);
  const [paymentTypes, setPaymentType] = useState([]);
  const history = useHistory();
  const { user } = useContext(UserContext);
  const { setCart } = useContext(CartContext);

  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    zipcode: '',
    neighborhood: '',
    city: '',
    stateId: 0,
  });
  const [payment, setPayment] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    getFormDetails().then((response) => {
      setStates(response.data.states);
      setPaymentType(response.data.paymentTypes);
    });
  }, []);

  function alertProblem(message) {
    sendAlert({
      message: message,
      error: true,
    });
    setIsButtonDisabled(false);
  }

  function submitHelper(event) {
    event.preventDefault();
    setIsButtonDisabled(true);

    const validation = addressSchema.validate(address);

    if (validation.error)
      return alertProblem(validation.error.details[0].message);

    if (!payment) {
      return alertProblem('Please, choose a payment method');
    }

    sendOrder(
      { address, paymentId: payment, products: chosenItems },
      user.token
    )
      .then((response) => {
        setCart([]);
        saveCartToStorage([]);
        history.push(`/success/${response.data.orderId}`);
      })
      .catch((error) =>
        alertProblem("We coulnd't create your order. Please, try again later.")
      );
  }

  return (
    <Wrapper>
      <form onSubmit={(e) => submitHelper(e)}>
        <fieldset>
          <InputsBox>
            <h1>Address</h1>

            <div>
              <StyledInput
                width="80%"
                type="text"
                placeholder="Street"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
                required
              />
              <StyledInput
                width="10%"
                type="number"
                placeholder="No"
                value={address.number}
                onChange={(e) =>
                  setAddress({ ...address, number: e.target.value })
                }
                required
              />
              <StyledInput
                width="40%"
                type="text"
                placeholder="Complement"
                value={address.complement}
                onChange={(e) =>
                  setAddress({ ...address, complement: e.target.value })
                }
              />
              <StyledInput
                width="20%"
                type="text"
                maxLength="9"
                placeholder="Zipcode"
                value={address.zipcode}
                onChange={(e) =>
                  setAddress({ ...address, zipcode: e.target.value })
                }
                required
              />
              <StyledInput
                width="25%"
                type="text"
                placeholder="Neighborhood"
                value={address.neighborhood}
                onChange={(e) =>
                  setAddress({ ...address, neighborhood: e.target.value })
                }
                required
              />
              <StyledInput
                width="40%"
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                required
              />

              <Select
                id="states"
                value={address.stateId}
                onChange={(e) =>
                  setAddress({ ...address, stateId: e.target.value })
                }
              >
                <option value={undefined}>State</option>
                {states.map((state) => (
                  <option value={state.id} key={state.id}>
                    {state.name}
                  </option>
                ))}
              </Select>
            </div>

            <Select
              id="paymentType"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value={0}>Payment Type</option>
              {paymentTypes.map((type) => (
                <option value={type.id} key={type.id}>
                  {type.name}
                </option>
              ))}
            </Select>
          </InputsBox>

          <ConfirmButton type="submit" isButtonDisabled={isButtonDisabled}>
            Confirm Order
          </ConfirmButton>
        </fieldset>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 8px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 600px) {
      justify-content: flex-start;
    }
  }
`;

const ConfirmButton = styled(StyledButton)`
  background-color: #0079ca;
`;

const InputsBox = styled.div`
  width: 49%;
  height: auto;
  border-radius: 4px;
  background-color: #242424;
  padding: 16px 8px 32px;

  & > * {
    margin-bottom: 64px;
  }
  @media (max-width: 900px) {
    width: 78%;
  }
  @media (max-width: 600px) {
    width: 92%;
  }
`;

const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : '200px')};
  height: 36px;
  border-radius: 4px;
  border: none;
  background: #424242;
  color: #fff;
  padding: 8px;
  margin: 8px 8px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    font-family: Roboto;
    font-weight: 400;
    color: #fff;
  }
  :focus {
    outline: none;
    border: 1px solid #009bf5;
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    height: 28px;
    font-size: 12px;
  }
`;

const Select = styled.select`
  width: 20%;
  height: 56px;
  border-radius: 4px;
  border: none;
  background: #424242;
  color: #fff;
  padding: 8px;
  margin: 8px 8px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;

  @media (max-width: 600px) {
    width: 40%;
    height: 44px;
    font-size: 12px;
  }
`;
