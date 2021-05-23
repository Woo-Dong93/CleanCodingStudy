import Button from '@components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { ESize } from '@type/css';
import { TAppData } from '../../module/app';
import './styled.scss';

type THeader = {
  appData: TAppData;
};

const Header = ({ appData }: THeader) => {
  const onSaveFile = () => {
    const fileName = `블로그 Data_${Date.now()}.txt`;
    const $element = document.createElement('a');
    $element.href = `data:text/plain; charset=utf-8,${JSON.stringify(appData)}`;
    $element.download = fileName;
    $element.click();
  };

  return (
    <div className="header">
      <div>
        <Link to="/blog">{appData.name}</Link>
      </div>
      <div className="header-button">
        <Button onClick={onSaveFile} size={ESize.middle}>
          추출하기
        </Button>
      </div>
    </div>
  );
};

export default Header;
