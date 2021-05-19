import React from 'react';
import { TItem } from '@type/item';
import './styled.scss';

const Item = ({ content }: TItem) => {
  return <div className="item">{content.title}</div>;
};

export default Item;
