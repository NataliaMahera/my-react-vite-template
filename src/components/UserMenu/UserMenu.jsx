import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { LogoutBtn } from '../ReUseComponents/Buttons/Buttons';
import { removeUser } from '../../redux/auth/authReducer';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase';
import { HOME_ROUTE } from '../../constants/routes';

const UserMenu = () => {
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    dispatch(removeUser());
    navigate(HOME_ROUTE);
  };

  const dispatch = useDispatch();
  return (
    <div className="flex gap-[15px] ">
      <h2>Welcome, {user.email} </h2>
      <LogoutBtn onClick={logOut} />
    </div>
  );
};

export default UserMenu;
