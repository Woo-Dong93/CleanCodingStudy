import React from 'react';
import Button from '@components/Button';
import Item from '@components/Item';
import { ESize } from '@type/css';
import './styled.scss';

type TListContainer = {
  btnOnClick: () => void;
};

const ListContainer = ({ btnOnClick }: TListContainer) => {
  return (
    <div className="list-container">
      <div className="list-main">
        <Item key="1" content={{ id: 1, title: '제목1', content: '안녕하세요.' }} />
        <Item key="2" content={{ id: 2, title: '제목2', content: '안녕하세요2' }} />
        <Item key="3" content={{ id: 3, title: '제목3', content: '안녕하세요3' }} />
      </div>
      <div className="list-footer">
        <Button onClick={btnOnClick} size={ESize.middle}>
          글쓰기
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ListContainer);
