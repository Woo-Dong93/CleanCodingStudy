import React, { useCallback, useState } from 'react';
import Header from '@layouts/Header';
import MainContainer from '@layouts/MainContainer';
import ListContainer from '@layouts/ListContainer';
import ContentContainer from '@layouts/ContentContainer';
import Modal from '@components/Modal';
import useTextArea from '@hooks/useTextArea';
import useInput from '@hooks/useInput';
import './styled.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { insertContents } from '../../module/app';

const Blog = () => {
  const [modalState, setModalState] = useState(false);
  const [textAreaValue, textAreaOnChange, setTextAreaValue] = useTextArea('');
  const [inputValue, inputOnChange, setInputValue] = useInput('');
  const appData = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const btnOnClick = useCallback(() => {
    setModalState(true);
  }, []);

  // Modal handler
  const modalOnSubmit = () => {
    const contents_id = appData.list.length + 1;
    dispatch(insertContents({ id: contents_id, title: inputValue, contents: textAreaValue }));
    setModalState(false);
  };

  const modalOnClose = () => {
    setInputValue('');
    setTextAreaValue('');
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
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
    </div>
  );
};

export default Blog;
