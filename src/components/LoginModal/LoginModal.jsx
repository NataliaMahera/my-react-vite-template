import { signInWithEmailAndPassword } from 'firebase/auth';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../redux/auth/authReducer';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import {
  BlockedEyeIcon,
  FormBtn,
  OpenEyeIcon,
} from '../ReUseComponents/Buttons/Buttons';
import { TEACHERS_ROUTE } from '../../constants/routes';
import { toast } from 'react-toastify';
import { styleToastify } from '../Toster/tostify';
import { LoginSchema } from '../../helpers/schemas';

const initialValues = { email: '', password: '' };

const LoginModal = ({ closeModal }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(user));
      resetForm();
      closeModal();
      navigate(TEACHERS_ROUTE);
      toast.success('You have successfully logged in!', styleToastify);
    } catch (error) {
      toast.error(
        'Oops something went wrong, check if you entered the data correctly',
        styleToastify
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="mb-[20px] text-[40px] leading-[1.2] font-medium text-primary-text-color">
        Log In
      </h1>
      <p className="mb-[40px] text-[16px] leading-[1.37] text-secondary-text-color">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form autoComplete="off" className="flex flex-col gap-[18px]">
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className="input-form"
          />
          <ErrorMessage name="email" component="span" className="errorMsg" />
          <div className="relative">
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="input-form  "
            />
            {showPassword ? (
              <OpenEyeIcon
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <BlockedEyeIcon
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
          <ErrorMessage name="password" component="span" className="errorMsg" />
          <FormBtn>Log In</FormBtn>
        </Form>
      </Formik>
    </>
  );
};

export default LoginModal;
