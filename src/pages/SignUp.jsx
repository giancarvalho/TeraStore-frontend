import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import PageContainer from '../components/containers/PageContainer';
import ContentContainer from '../components/containers/ContentContainer';
import TeraStore from '../components/logo/Logo';
import StyledButton from '../components/buttons/StyledButton';
import Input from '../components/input/Input';
import styled from 'styled-components';
import Header from '../components/header/Header';
import { createUser } from '../services/services';
import userSchema from '../validation/newUserSchema';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [disabled, setDisabled] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
    cpf: '',
  });
  const history = useHistory();

  function register(e) {
    e.preventDefault();

    const validation = userSchema.validate(form);

    if (validation.error) {
      toast.error(validation.error.details[0].message);
      setDisabled(false);
      return;
    }

    setDisabled(true);
    createUser(form)
      .then(() => history.push('/sign-in?registered=true'))
      .catch((error) => {
        if (error.response.status === 409)
          toast.error('This user is already registered');
        else
          toast.error(
            "Ops, we can't reach our server at the moment. Check your connection and reload the page."
          );

        setDisabled(false);
      });
  }

  return (
    <PageContainer>
      <Header />
      <Container>
        <TeraStore margin="40px 0" big />
        <Form onSubmit={register}>
          <fieldset disabled={disabled}>
            <Input
              placeholder="Name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              placeholder="Password"
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            <Input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              placeholder="CPF"
              value={form.cpf}
              onChange={(e) => setForm({ ...form, cpf: e.target.value })}
              required
            />
            <ButtonContainer>
              <Button disabled={disabled}>Sign In</Button>
            </ButtonContainer>
          </fieldset>
        </Form>
        <Link to={'sign-in'}>First time? Sign up!</Link>
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
