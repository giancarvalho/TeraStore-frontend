import styled from 'styled-components';

const StyledButton = styled.button`
  width: 320px;
  height: 60px;
  border-radius: 4px;
  margin: 48px 0px;
  background-color: ${(props) => (props.color ? props.color : '#76B900')};
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
`;

export default StyledButton;
