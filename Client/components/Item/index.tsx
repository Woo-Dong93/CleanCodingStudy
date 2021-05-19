import React from 'react';
import { TContents } from '../../module/app';
import './styled.scss';

type TItem = {
  contents: TContents;
};

const Item = ({ contents }: TItem) => {
  return <div className="item">{contents.title}</div>;
};

export default Item;
