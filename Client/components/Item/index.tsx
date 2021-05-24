import React from 'react';
import { TContents } from '../../module/app';
import './styled.scss';

type TItem = {
  contents: TContents;
  selected: boolean;
};

const Item = ({ contents, selected }: TItem) => {
  return <div className={`item ${selected ? 'selected' : ''}`}>{contents.title}</div>;
};

export default Item;
