import React from 'react';
import './styled.scss';

type TinputProps = {
  type: string;
  color?: 'black' | 'green' | 'blue';
  size?: 'small' | 'middle' | 'large' | 'auto';
  fontSize?: 'small' | 'middle' | 'large';
  placeHolder?: string;
};

const input = ({ type = 'text', color = 'black', size = 'auto', fontSize = 'small', placeHolder }: TinputProps) => {
  return <input className={`Input ${color} ${size} font-${fontSize}`} type={type} placeholder={placeHolder} />;
};

export default input;
