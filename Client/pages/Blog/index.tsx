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
import { useParams, Redirect, useHistory } from 'react-router';

const Blog = () => {
  const { idx } = useParams<{ idx: string }>();
  const [modalState, setModalState] = useState(false);
  const [textAreaValue, textAreaOnChange, setTextAreaValue] = useTextArea('');
  const [inputValue, inputOnChange, setInputValue] = useInput('');
  const appData = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

  const btnOnClick = useCallback(() => {
    setModalState(true);
  }, []);

  // Modal handler
  const modalOnSubmit = () => {
    const contents_id = appData.list.length + 1;
    dispatch(insertContents({ id: contents_id, title: inputValue, contents: textAreaValue }));

    // 초기화
    setInputValue('');
    setTextAreaValue('');
    setModalState(false);

    history.push(`/blog/${contents_id}`);
  };

  const modalOnClose = () => {
    setInputValue('');
    setTextAreaValue('');
    setModalState(false);
  };

  const contentsGetByIdx = (): string => {
    if (!idx) {
      return appData.contents;
    } else {
      for (let i = 0; i < appData.list.length; i++) {
        if (parseInt(idx, 10) === appData.list[i].id) {
          return appData.list[i].contents;
        }
      }
      return '';
    }
  };

  // 글이 존재하지 않으면 홈으로 가기
  if (!contentsGetByIdx()) {
    return <Redirect to="/blog" />;
  }

  return (
    <div className="wrap">
      <Header />
      <MainContainer>
        <ListContainer btnOnClick={btnOnClick} listData={appData.list} />
        <ContentContainer contents={contentsGetByIdx()} />
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
