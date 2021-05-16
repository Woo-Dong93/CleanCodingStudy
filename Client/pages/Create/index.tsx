import React from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import './styled.scss';

const Create = () => {
  const h = () => {
    console.log('hi');
  };
  return (
    <div>
      생성페이지입니다.
      <Input type="text" color="green" size="auto" fontSize="middle" placeHolder="블로그 이름을 입력해주세요!" />
      <Button color="green" size="middle" handler={h}>
        생성하기
      </Button>
    </div>
  );
};

export default Create;
