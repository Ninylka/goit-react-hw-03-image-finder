import Modal from 'react-modal';
import { ModalStyled } from './Modal.styled';
Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: `calc(60vw)`,
    maxHeight: `calc(80vh)`,

  },
};

export const ReactModal = ({ isModalOpen, closeModal, imageURL }) => {
    return (
      <ModalStyled
      isOpen={isModalOpen} 
      onRequestClose={closeModal} 
      style={customStyles}
        >
             <img src={imageURL} alt="Result search" />
      </ModalStyled>
    );
  };
