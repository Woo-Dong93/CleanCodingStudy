import React from 'react';
import { TContents } from '../../module/app';
import './styled.scss';

type TItem = {
  contents: TContents;
  select: boolean;
};

const Item = ({ contents, select }: TItem) => {
  return (
    <>{select ? <div className="item selected">{contents.title}</div> : <div className="item">{contents.title}</div>}</>
  );
};

export default Item;
