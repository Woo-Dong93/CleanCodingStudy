import React from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import './styled.scss';

const Create = () => {
  const testHandler = () => {
    console.log('hi');
  };
  return (
    <div className="Main-container">
      <div className="Input-container">
        <Input type="text" color="green" size="auto" fontSize="middle" placeHolder="블로그 이름을 입력해주세요!" />
      </div>
      <div className="Button-container">
        <Button color="green" size="middle" handler={testHandler}>
          생성하기
        </Button>
        <Button color="green" size="middle" handler={testHandler}>
          불러오기
        </Button>
      </div>
    </div>
  );
};

export default Create;
