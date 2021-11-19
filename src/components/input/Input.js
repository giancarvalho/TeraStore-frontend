import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  height: 36px;
  color: #fff;
  font-size: 17px;
  margin-bottom: 8px;
  border-radius: 5px;
  padding: 5px;
  background: #424242;
  border: ${({ alert }) => (alert ? '2px solid #df0000' : 'none')};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fff;
  }

  @media (max-width: 600px) {
    height: 28px;
    font-size: 12px;
  }
`;

export default Input;
