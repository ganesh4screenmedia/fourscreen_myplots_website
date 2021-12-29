import React from 'react';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 100,
  backgroundColor: 'white',
};

const CustomModal = function ({
  children,
  onClose,
  open = false,
  modalWidth = 400,
  modalHeight = 400,
  left = '50%',
}) {
  return (
    <Modal
      open={open}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      onClose={onClose}
    >
      <div style={{ ...style, width: modalWidth, height: modalHeight, outline: 'none', left }}>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
