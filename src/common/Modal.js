import React from 'react';

const Modal = ({ onClose, onOpenNext, content }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">{content}</div>
          <button onClick={onClose}>
            Close
          </button>
          {onOpenNext && (
            <button className="open-next-modal-button" onClick={onOpenNext}>
              Open Next Modal
            </button>
          )}
        </div>
      </div>
    );
  };

export default Modal;
