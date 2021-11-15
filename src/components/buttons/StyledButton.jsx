import styled from 'styled-components';

const StyledButton = styled.button`
  width: 90%;
  max-width: 320px;
  height: 60px;
  border-radius: 4px;
  margin: 28px 0px;
  background-color: ${(props) => (props.color ? props.color : '#76b900')};
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  opacity: ${(props) => (props.isButtonDisabled ? '0.5' : '1')};
  border: none;
  cursor: pointer;

  :hover {
    filter: brightness(1.15);
  }

  @media (max-width: 700px) {
    height: 40px;
    font-size: 16px;
  }
`;

export default StyledButton;
