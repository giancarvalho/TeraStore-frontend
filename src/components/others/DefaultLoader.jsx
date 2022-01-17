import LoaderContainer from '../containers/LoaderContainer';
import Loader from 'react-loader-spinner';

export default function DefaultLoader() {
  return (
    <LoaderContainer>
      <Loader type="TailSpin" color="#e9e9e9" height={80} width={80} />
    </LoaderContainer>
  );
}
