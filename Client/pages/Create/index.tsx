import React from 'react';
import Input from '@components/Input';
import './styled.scss';

const Create = () => {
  return (
    <div className="a">
      생성페이지입니다.
      <Input type="text" color="green" size="auto" fontSize="middle" placeHolder="블로그 이름을 입력해주세요!" />
    </div>
  );
};

export default Create;
