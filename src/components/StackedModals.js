import React, { useState } from 'react';
import Modal from '../common/Modal';

const StackedModals = () => {
    const [modalStack, setModalStack] = useState([]);

    const openModal = (content) => {
      setModalStack([...modalStack, content]);
    };
  
    const closeModal = () => {
      const updatedStack = [...modalStack];
      updatedStack.pop();
      setModalStack(updatedStack);
    };
  
    return (
      <div>
        <button onClick={() => openModal("First Modal Content")}>Open First Modal</button>
  
        {modalStack.map((modalContent, index) => (
          <Modal
            key={index}
            onClose={closeModal}
            onOpenNext={() => openModal(`Next Modal Content ${index + 2}`)}
            content={modalContent}
          />
        ))}
      </div>
    );
};

export default StackedModals;
