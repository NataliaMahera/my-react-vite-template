import TeachersItem from '../TeachersItem/TeachersItem';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';

const TeachersList = ({ teachers }) => {
  const isLoading = useSelector(selectAuthIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="flex flex-col w-auto min-w-[320px] gap-[32px] justify-center items-center mx-auto">
        {teachers.length > 0 &&
          teachers?.map((teacher) => {
            return <TeachersItem key={teacher.id} teacher={teacher} />;
          })}
      </ul>
    </>
  );
};

export default TeachersList;
