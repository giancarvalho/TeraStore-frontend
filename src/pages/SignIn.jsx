import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import UserContext from '../contexts/UserContext';
import PageContainer from '../components/containers/PageContainer';
import ContentContainer from '../components/containers/ContentContainer';
import TeraStore from '../components/logo/Logo';
import StyledButton from '../components/buttons/StyledButton';
import Input from '../components/input/Input';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { authenticateUser } from '../services/services';

export default function SignIn({ sendAlert }) {
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setUser } = useContext(UserContext);
  const storedUser = getStoredUser();
  const isRegistered = useQuery().get('registered');

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    if (storedUser) {
      setUser(storedUser);
      history.push('/checkout');
      return;
    }

    if (isRegistered) {
      sendAlert({
        message: 'Success! Now sign in to your account.',
      });
    }
  }, [storedUser, history, isRegistered, sendAlert, setUser]);

  function getStoredUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  function storeUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  function signIn(e) {
    e.preventDefault();
    setDisabled(true);

    authenticateUser({ email, password })
      .then((response) => {
        storeUser(response.data);
        setUser(response.data);
        history.push('/');
      })
      .catch((error) => {
        sendAlert({
          message: error.response
            ? error.response?.data
            : 'Our server is out of reach at the moment.',
          error: true,
        });

        setDisabled(false);
      });
  }

  return (
    <PageContainer>
      <Header />
      <Container>
        <TeraStore margin="40px 0" big />
        <Form onSubmit={signIn}>
          <fieldset disabled={disabled}>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <ButtonContainer>
              <Button disabled={disabled}>Sign In</Button>
            </ButtonContainer>
          </fieldset>
        </Form>
        <Link to={'sign-up'}>First time? Sign up!</Link>
      </Container>
    </PageContainer>
  );
}

const Form = styled.form``;

const Container = styled(ContentContainer)`
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  fieldset {
    width: 80vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }
`;

const Button = styled(StyledButton)``;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
