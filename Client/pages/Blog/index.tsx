import React, { useCallback, useState } from 'react';
import Header from '@layouts/Header';
import MainContainer from '@layouts/MainContainer';
import ListContainer from '@layouts/ListContainer';
import ContentContainer from '@layouts/ContentContainer';
import Modal from '@components/Modal';
import useTextArea from '@hooks/useTextArea';
import './styled.scss';

const Blog = () => {
  const [modalState, setModalState] = useState(false);
  const [textAreaValue, textAreaOnChange] = useTextArea('');

  const btnOnClick = useCallback(() => {
    setModalState(true);
  }, []);

  // Modal handler
  const modalOnSubmit = () => {
    console.log(textAreaValue);
  };
  const modalOnClose = () => {
    setModalState(false);
  };

  return (
    <div className="wrap">
      <Header />
      <MainContainer>
        <ListContainer btnOnClick={btnOnClick} />
        <ContentContainer />
      </MainContainer>
      <Modal
        modalState={modalState}
        onClose={modalOnClose}
        onSubmit={modalOnSubmit}
        title={'글쓰기'}
        textAreaValue={textAreaValue}
        textAreaOnChange={textAreaOnChange}
      />
    </div>
  );
};

export default Blog;
