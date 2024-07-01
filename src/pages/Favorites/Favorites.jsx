import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import TeachersList from '../../components/TeachersList/TeachersList';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavorites);

  return (
    <section className="min-w-[320px] max-w-[1440px] px-[64px] mx-auto">
      {favoriteItems.length === 0 ? (
        <p className="mt-[50px] font-medium text-[25px] leading-[1.5] text-center">
          💁Add teacher to your favorite list
        </p>
      ) : (
        <TeachersList teachers={favoriteItems} />
      )}
    </section>
  );
};

export default Favorites;
