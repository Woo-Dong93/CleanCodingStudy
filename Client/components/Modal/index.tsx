import React from 'react';
import Button from '@components/Button';
import { EColor, ESize } from '@type/css';
import './styled.scss';

type TModal = {
  title: string;
  modalState: boolean;
  onSubmit: () => void;
  onClose: () => void;
  textAreaValue: string;
  textAreaOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Modal = ({ title, onSubmit, onClose, modalState, textAreaValue, textAreaOnChange }: TModal) => {
  if (!modalState) return null;
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <p>{title}</p>
        </div>
        <div className="modal-content">
          <textarea value={textAreaValue} onChange={textAreaOnChange}></textarea>
        </div>
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
