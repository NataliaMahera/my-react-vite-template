import { useSelector } from 'react-redux';
import img from '../../assets/img/auth/factor-authentication.png';
import Loader from '../Loader/Loader';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';

const UnauthorizedModal = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="m-auto">
      <img className="m-auto w-[150px] mb-[5px]" src={img} alt="notAuth " />
      <h1 className="text-center font-medium text-[20px] leading-[1.37] text-primary-text-color mb-[5px]">
        Oops, you are not registered yet!
      </h1>
      <p className=" text-secondary-text-color text-center">
        Register or log in into your account and you will have an access to more
        functions of using the site.
      </p>
    </div>
  );
};

export default UnauthorizedModal;
