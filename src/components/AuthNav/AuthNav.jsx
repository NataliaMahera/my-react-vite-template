import { useMemo, useState } from 'react';
import { LoginBtn, RegisterBtn } from '../ReUseComponents/Buttons/Buttons';
import LoginModal from '../LoginModal/LoginModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import Modal from '../ReUseComponents/Modal/Modal';

const AuthNav = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (modalType) => {
    setIsOpenModal(true);
    setModalType(modalType);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalType(null);
  };

  const TYPE = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
  };

  const getModalContent = useMemo(() => {
    if (modalType === 'LOGIN') {
      return <LoginModal closeModal={closeModal} modalData={modalType} />;
    } else if (modalType === 'REGISTER') {
      return <RegisterModal closeModal={closeModal} modalData={modalType} />;
    }
    return null;
  }, [modalType]);

  return (
    <>
      <div className="flex gap-x-[16px]">
        <LoginBtn onClick={() => openModal(TYPE.LOGIN)} />
        <RegisterBtn onClick={() => openModal(TYPE.REGISTER)} />
      </div>
      {isOpenModal && (
        <>
          <Modal
            closeModal={closeModal}
            isOpenModal={isOpenModal}
            body={getModalContent}
          />
        </>
      )}
    </>
  );
};

export default AuthNav;
