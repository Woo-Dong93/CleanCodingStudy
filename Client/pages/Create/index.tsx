import React from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useInput from '@hooks/useInput';
import { EColor, EFontSize, ESize } from '@type/css';
import './styled.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBlog } from '../../module/app';

const Create = () => {
  const [blogName, onChangeBlogName] = useInput('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onCreateBlog = () => {
    dispatch(createBlog(blogName));
    history.push(`/blog/`);
  };

  const onCreateBlogByFile = () => {
    console.log('hi');
  };

  return (
    <div className="Main-container">
      <div className="Input-container">
        <Input
          type="text"
          color={EColor.green}
          size={ESize.auto}
          fontSize={EFontSize.middle}
          placeHolder="블로그 이름을 입력해주세요!"
          inputValue={blogName}
          onChange={onChangeBlogName}
        />
      </div>
      <div className="Button-container">
        <Button color={EColor.green} size={ESize.middle} onClick={onCreateBlog}>
          생성하기
        </Button>
        <Button color={EColor.green} size={ESize.middle} onClick={onCreateBlogByFile}>
          불러오기
        </Button>
      </div>
    </div>
  );
};

export default Create;
