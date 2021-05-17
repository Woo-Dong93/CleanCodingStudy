import React from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useInput from '@hooks/useInput';
import { EColor, EFontSize, ESize } from '../../typings/css';
import './styled.scss';

const Create = () => {
  const [blogName, onChangeBlogName] = useInput('');

  const testHandler = () => {
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
        <Button color={EColor.green} size={ESize.middle} onClick={testHandler}>
          생성하기
        </Button>
        <Button color={EColor.green} size={ESize.middle} onClick={testHandler}>
          불러오기
        </Button>
      </div>
    </div>
  );
};

export default Create;
