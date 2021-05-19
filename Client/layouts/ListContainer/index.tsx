import React from 'react';
import Button from '@components/Button';
import Item from '@components/Item';
import { ESize } from '@type/css';
import { TContents } from '../../module/app';
import './styled.scss';

type TListContainer = {
  btnOnClick: () => void;
  listData: TContents[];
};

const ListContainer = ({ btnOnClick, listData }: TListContainer) => {
  return (
    <div className="list-container">
      <div className="list-main">
        {listData.map((item: TContents) => (
          <Item key={item.id} contents={item} />
        ))}
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
