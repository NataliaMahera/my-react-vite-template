import { useCallback, useEffect } from 'react';
import { CloseModalButton } from '../Buttons/Buttons';
import { createPortal } from 'react-dom';

const Modal = ({ closeModal, isOpenModal, body }) => {
  const portal = document.getElementById('portal');

  const closeModalCallback = useCallback(() => {
    if (isOpenModal) {
      closeModal();
    }
  }, [closeModal, isOpenModal]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModalCallback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModalCallback]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModalCallback();
    }
  };

  return createPortal(
    <div
      onClick={handleOverlayClick}
      className=" fixed backdrop-opacity-8 bg-decor-text-element overflow-x-hidden overflow-y-auto left-0 top-0 w-full h-full z-[100]"
    >
      <div className="overflow-auto absolute max-w-[90%] max-h-[90%] w-[541px] bg-bg-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[30px] flex flex-col p-[64px]">
        <CloseModalButton onClick={closeModalCallback} />
        {body}
      </div>
    </div>,
    portal
  );
};

export default Modal;
