import React from 'react';
import Header from '@layouts/Header';
import MainContainer from '@layouts/MainContainer';
import ListContainer from '@layouts/ListContainer';
import ContentContainer from '@layouts/ContentContainer';
import './styled.scss';

const Blog = () => {
  const btnOnClick = () => {
    console.log('버튼클릭');
  };

  return (
    <div className="wrap">
      <Header />
      <MainContainer>
        <ListContainer btnOnClick={btnOnClick} />
        <ContentContainer />
      </MainContainer>
    </div>
  );
};

export default Blog;
