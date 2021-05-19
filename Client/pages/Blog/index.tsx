import React, { useCallback, useState } from 'react';
import Header from '@layouts/Header';
import MainContainer from '@layouts/MainContainer';
import ListContainer from '@layouts/ListContainer';
import ContentContainer from '@layouts/ContentContainer';
import Modal from '@components/Modal';
import useTextArea from '@hooks/useTextArea';
import './styled.scss';
import { useDispatch, useSelector } from 'react-redux';
import { TAppData, insertContents } from '../../module/app';

const Blog = () => {
  const [modalState, setModalState] = useState(false);
  const [textAreaValue, textAreaOnChange] = useTextArea('');
  const appData = useSelector((state: TAppData) => state);
  const dispatch = useDispatch();

  const btnOnClick = useCallback(() => {
    setModalState(true);
  }, []);

  // Modal handler
  const modalOnSubmit = () => {
    //console.log(textAreaValue);
    dispatch(insertContents({ id: 1, title: 'gd', contents: 'dddd' }));
    setModalState(false);
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
