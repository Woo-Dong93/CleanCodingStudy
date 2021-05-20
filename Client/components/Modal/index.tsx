import React from 'react';
import Button from '@components/Button';
import { EColor, ESize } from '@type/css';
import './styled.scss';

type TModal = {
  children: React.ReactNode;
  title: string;
  opened: boolean;
  onSubmit: () => void;
  onClose: () => void;
};

const Modal = ({ children, title, onSubmit, onClose, opened }: TModal) => {
  if (!opened) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <p>{title}</p>
        </div>
        {children}
        <div className="modal-button">
          <Button onClick={onSubmit} size={ESize.middle} color={EColor.green}>
            등록하기
          </Button>
          <Button onClick={onClose} size={ESize.middle} color={EColor.green}>
            취소하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
