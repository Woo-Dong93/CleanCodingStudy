import React from 'react';
import Button from '@components/Button';
import Item from '@components/Item';
import { ESize } from '@type/css';
import { TContents } from '../../module/app';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styled.scss';

type TListContainer = {
  onCreateModal: () => void;
  listData: TContents[];
};

const ListContainer = ({ onCreateModal, listData }: TListContainer) => {
  const { index } = useParams<{ index: string }>();

  return (
    <div className="list-container">
      <div className="list-main">
        {listData.map((item: TContents) => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            <Item contents={item} selected={Number(index) === item.id} />
          </Link>
        ))}
      </div>
      <div className="list-footer">
        <Button onClick={onCreateModal} size={ESize.middle}>
          글쓰기
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ListContainer);
