import Button from '@components/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { EColor, ESize } from '@type/css';
import './styled.scss';

type THeader = {
  title: string;
};

const onSaveFile = () => {};

const Header = ({ title }: THeader) => {
  return (
    <div className="header">
      <div>
        <Link to="/blog">{title}</Link>
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
