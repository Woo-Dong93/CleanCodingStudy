import React from 'react';
import Header from '@layouts/Header';
import MainContainer from '@layouts/MainContainer';
import ListContainer from '@layouts/ListContainer';
import ContentContainer from '@layouts/ContentContainer';
import './styled.scss';

const Blog = () => {
  return (
    <div className="wrap">
      <Header />
      <MainContainer>
        <ListContainer />
        <ContentContainer />
      </MainContainer>
    </div>
  );
};

export default Blog;
