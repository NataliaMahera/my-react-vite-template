import { useEffect, useState } from 'react';
import TeachersList from '../../components/TeachersList/TeachersList';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import {
  endAt,
  onValue,
  orderByKey,
  query,
  ref,
  startAfter,
} from 'firebase/database';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { styleToastify } from '../../components/Toster/tostify';
import { LoadMoreButton } from '../../components/ReUseComponents/Buttons/Buttons';
import Loader from '../../components/Loader/Loader';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [lastKey, setLastKey] = useState('');
  const [loadMoreData, setLoadMoreData] = useState(true);
  const isLoading = useSelector(selectAuthIsLoading);
  const cardLimitOnPage = 4;

  const initialQuery = query(
    ref(db, 'teachers'),
    orderByKey(),
    endAt(lastKey + 3)
  );

  const getTeachersData = async (queryRef) => {
    try {
      onValue(queryRef, (snapshot) => {
        const newTeacherData = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          newTeacherData.push({ id: childKey, ...childData });
          setLastKey(childKey);
        });
        setTeachers((prevState) => [...prevState, ...newTeacherData]);
        if (newTeacherData.length < cardLimitOnPage && teachers.length > 0)
          setLoadMoreData(false);
      });
    } catch (error) {
      toast.error(
        'Oops something went wrong, error fetching teachers',
        styleToastify
      );
    }
  };

  const handleLoadMoreData = () => {
    const nextQuery = query(
      ref(db, 'teachers'),
      orderByKey(),
      startAfter(lastKey),
      endAt(String(Number(lastKey) + 4))
    );
    getTeachersData(nextQuery);
  };

  useEffect(() => {
    getTeachersData(initialQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="min-w-[320px] max-w-[1440px] min-h-[100vh] pt-[32px] pb-[96px] mx-auto px-[64px]">
      <TeachersList teachers={teachers} />
      {loadMoreData && teachers.length > 0 && (
        <LoadMoreButton onClick={handleLoadMoreData}>Load More</LoadMoreButton>
      )}
    </section>
  );
};

export default Teachers;
