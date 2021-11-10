import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import PageContainer from '../components/containers/PageContainer';
import Footer from '../components/Footer';
import ContentContainer from '../components/containers/ContentContainer';

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>
        <BannerContainer>
          <Banner
            src="https://www.zotac.com/download/files/styles/w1920/public/news/images/vga_2070_1280x500_edit.jpg?itok=obf3FFT0"
            alt="gpu"
          />
        </BannerContainer>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 250px;
`;

const Banner = styled.img`
  width: 100%;
  height: 250px;
  object-fit: fill;
`;
