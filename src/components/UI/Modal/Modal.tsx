import React from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ show, onClose, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <>
    <div
      className="modal-backdrop show"
      style={{display: 'block'}}
    />
  <div className="modal fade show" style={{display: 'block'}}>
    <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-sm-flex justify-content-between">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close border-0 bg-white"
              onClick={onClose}
              aria-label="Close"
            ><span aria-hidden="true">x</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Modal;