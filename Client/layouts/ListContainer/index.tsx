import React from 'react';
import Button from '@components/Button';
import Item from '@components/Item';
import { ESize } from '@type/css';
import { TContents } from '../../module/app';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styled.scss';

type TListContainer = {
  btnOnClick: () => void;
  listData: TContents[];
};

const ListContainer = ({ btnOnClick, listData }: TListContainer) => {
  const { idx } = useParams<{ idx: string }>();

  return (
    <div className="list-container">
      <div className="list-main">
        {listData.map((item: TContents) => (
          <Link key={item.id} to={`/blog/${item.id}`}>
            {parseInt(idx, 10) === item.id ? (
              <Item contents={item} select={true} />
            ) : (
              <Item contents={item} select={false} />
            )}
          </Link>
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
