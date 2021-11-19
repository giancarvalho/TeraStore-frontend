import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PageContainer from '../components/containers/PageContainer';
import ContentContainer from '../components/containers/ContentContainer';
import { useHistory, useParams } from 'react-router';
import StyledButton from '../components/buttons/StyledButton';

export default function SuccessPage() {
  const history = useHistory();
  const { id } = useParams();

  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <MessageContainer>
          <p>
            Thank you! We are processing your order <span>#{id}</span>.
          </p>
          <GoBackButton onClick={() => history.push('/')}>
            Go back to home
          </GoBackButton>
        </MessageContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const MessageContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 26px;

  span {
    color: #76b900;
  }
  p {
    margin: 0 20px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const GoBackButton = styled(StyledButton)`
  background-color: #fff;
  color: #000;
`;
