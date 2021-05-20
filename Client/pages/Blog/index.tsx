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
  const { index } = useParams<{ index: string }>();
  const [opened, setModalState] = useState(false);
  const [textAreaValue, onChangeTextArea, setTextAreaValue] = useTextArea('');
  const [inputValue, inputOnChange, setInputValue] = useInput('');
  const appData = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const history = useHistory();

  const onCreateModal = useCallback(() => {
    setModalState(true);
  }, []);

  // Modal handler
  const onSubmitModal = () => {
    const contents_id = appData.list.length + 1;
    dispatch(insertContents({ id: contents_id, title: inputValue, contents: textAreaValue }));

    // 초기화
    setInputValue('');
    setTextAreaValue('');
    setModalState(false);

    history.push(`/blog/${contents_id}`);
  };

  const onCloseModal = () => {
    setInputValue('');
    setTextAreaValue('');
    setModalState(false);
  };

  const getContentsByIndex = (): string => {
    if (!index) {
      return appData.contents;
    } else {
      for (let i = 0; i < appData.list.length; i++) {
        if (Number(index) === appData.list[i].id) {
          return appData.list[i].contents;
        }
      }
      return '';
    }
  };

  // 글이 존재하지 않으면 홈으로 가기
  if (!getContentsByIndex()) {
    return <Redirect to="/blog" />;
  }

  return (
    <div className="wrap">
      <Header />
      <MainContainer>
        <ListContainer onCreateModal={onCreateModal} listData={appData.list} />
        <ContentContainer contents={getContentsByIndex()} />
      </MainContainer>
      <Modal
        opened={opened}
        onClose={onCloseModal}
        onSubmit={onSubmitModal}
        title={'글쓰기'}
        textAreaValue={textAreaValue}
        onChangeTextArea={onChangeTextArea}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
    </div>
  );
};

export default Blog;
