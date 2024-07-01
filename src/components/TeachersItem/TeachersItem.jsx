import { useMemo, useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
  BookLessonButton,
  ReadMoreButton,
} from '../ReUseComponents/Buttons/Buttons';
import BookLessonModal from '../BookLessonModal/BookLessonModal';
import UnauthorizedModal from '../UnauthorizedModal/UnauthorizedModal';
import Modal from '../ReUseComponents/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  addToFavorites,
  deleteFromFavorites,
} from '../../redux/favorites/favoritesReducer';
import CardComponent from '../CardComponent/CardComponent';
import Avatar from '../CardAvatar/Avatar';
import CardComponentUnrolled from '../CardComponent/CardComponentUnrolled';
import CardComponentRolled from '../CardComponent/CardComponentRolled';
import CardComponentLevels from '../CardComponent/CardComponentLevels';

const TeachersItem = ({ teacher }) => {
  const favoriteItems = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const dispatch = useDispatch();

  const [showReadMore, setShowReadMore] = useState(true);
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
    BOOKING: 'BOOKING',
    UNAUTHORIZED: 'UNAUTHORIZED',
  };

  const getModalContent = useMemo(() => {
    if (modalType === 'BOOKING') {
      return (
        <BookLessonModal
          closeModal={closeModal}
          modalData={modalType}
          teacher={teacher}
        />
      );
    } else if (modalType === 'UNAUTHORIZED') {
      return (
        <UnauthorizedModal closeModal={closeModal} modalData={modalType} />
      );
    }
    return null;
  }, [modalType, teacher]);

  const isFavorite = favoriteItems.some(({ id }) => id === teacher.id);

  const handleFavoriteToggle = () => {
    if (isLoggedIn) {
      dispatch(
        isFavorite ? deleteFromFavorites(teacher) : addToFavorites(teacher)
      );
    } else {
      openModal(TYPE.UNAUTHORIZED);
    }
  };

  const { name, surname } = teacher || {};

  return (
    <>
      <li className=" flex flex-wrap justify-between items-start w-full rounded-[24px] p-[24px] bg-bg-color max-w-[1184px]">
        <Avatar teacher={teacher} />
        <div className="max-w-[968px] w-full">
          <div className="flex flex-wrap mb-[32px] gap-y-[18px] justify-between items-start">
            <div>
              <p className="text-[16px] leading-[1.5] font-medium text-card-text-color mb-[8px]">
                Languages
              </p>
              <h2 className="text-[24px] leading-[1] font-medium text-primary-text-color ">
                {name} {surname}
              </h2>
            </div>
            <div className="flex justify-between items-start max-w-[697px] w-full">
              <CardComponentUnrolled teacher={teacher} />
              <button
                className="p-0 flex justify-center items-center ease-in-out duration-100 focus:scale-[1.035] hover:scale-[1.035] focus:contrast-[0.9] hover:contrast-[0.9] cursor-pointer "
                type="button"
                onClick={handleFavoriteToggle}
              >
                <svg
                  className={
                    isFavorite ? 'remove-favorite-icon' : 'add-favorite-icon'
                  }
                >
                  <use href={sprite + '#icon-heart'}></use>
                </svg>
              </button>
            </div>
          </div>
          <CardComponent teacher={teacher} />
          {showReadMore ? (
            <ReadMoreButton onClick={() => setShowReadMore(false)}>
              Read more
            </ReadMoreButton>
          ) : (
            <CardComponentRolled teacher={teacher} />
          )}
          <CardComponentLevels teacher={teacher} />
          {!showReadMore && (
            <BookLessonButton onClick={() => openModal(TYPE.BOOKING)}>
              Book trial lesson
            </BookLessonButton>
          )}
        </div>
      </li>
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

export default TeachersItem;
