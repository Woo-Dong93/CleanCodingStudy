import React from 'react';
import { TContents } from '../../module/app';
import './styled.scss';

type TItem = {
  contents: TContents;
  seleced: boolean;
};

const Item = ({ contents, seleced }: TItem) => {
  return <div className={`item ${seleced ? 'selected' : ''}`}>{contents.title}</div>;
};

export default Item;
