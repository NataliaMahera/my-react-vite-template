import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import auth from '../../firebase';
import { setUser } from '../../redux/auth/authReducer';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import {
  BlockedEyeIcon,
  FormBtn,
  OpenEyeIcon,
} from '../ReUseComponents/Buttons/Buttons';
import { TEACHERS_ROUTE } from '../../constants/routes';
import { toast } from 'react-toastify';
import { styleToastify } from '../Toster/tostify';
import { RegisterSchema } from '../../helpers/schemas';

const initialValues = { name: '', email: '', password: '' };

const RegisterModal = ({ closeModal }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegisterSubmit = async (
    { name, email, password },
    { resetForm }
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: name,
      });

      dispatch(setUser(user));
      resetForm();
      closeModal();
      navigate(TEACHERS_ROUTE);
      toast.success('You have successfully registered!', styleToastify);
    } catch (error) {
      toast.error(
        'Oops, you already have an account with the following data',
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
        Registration
      </h1>
      <p className="mb-[40px] text-[16px] leading-[1.37] text-secondary-text-color">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleRegisterSubmit}
      >
        <Form autoComplete="off" className="flex flex-col gap-[18px]">
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="input-form"
          />
          <ErrorMessage name="name" component="span" className="errorMsg" />
          <Field
            type="text"
            name="email"
            placeholder="Email"
            className="input-form"
          />
          <ErrorMessage
            name="email"
            component="span"
            className="errorMsg p-[px]"
          />
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
          <FormBtn>Sign Up</FormBtn>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterModal;
