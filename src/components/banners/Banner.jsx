import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Banner({ imageList }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const nextIndex =
        photoIndex + 1 === imageList.length ? 0 : photoIndex + 1;
      setPhotoIndex(nextIndex);
    }, 5000);
  }, [imageList.length, photoIndex]);

  return (
    <BannerContainer>
      {imageList.map((photo, index) => (
        <Image
          src={photo}
          key={index}
          alt="banner"
          isDisplaying={photoIndex === index}
        />
      ))}
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 600px) {
    height: 120px;
  }

  @keyframes fadein {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ isDisplaying }) => (isDisplaying ? '1' : '0')};
  transition: opacity 500ms ease-in-out;

  @media (max-width: 600px) {
    height: 120px;
  }
`;
