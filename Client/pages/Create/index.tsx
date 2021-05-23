import React, { ChangeEvent } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useInput from '@hooks/useInput';
import { EColor, EFontSize, ESize } from '@type/css';
import './styled.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBlog, fileUploadAppData } from '../../module/app';

const Create = () => {
  const [blogName, onChangeBlogName] = useInput('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onCreateBlog = () => {
    dispatch(createBlog(blogName));
    history.push(`/blog/`);
  };

  const onCreateBlogByFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileReader = new FileReader();

      fileReader.readAsText(file);
      fileReader.onload = () => {
        const appData = JSON.parse(fileReader.result as string);
        dispatch(fileUploadAppData(appData));
        history.push(`/blog/`);
      };
    }
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
      </div>
      <div className="File-container">
        <Input
          type="file"
          color={EColor.green}
          size={ESize.auto}
          fontSize={EFontSize.small}
          onChange={onCreateBlogByFile}
        />
      </div>
    </div>
  );
};

export default Create;
