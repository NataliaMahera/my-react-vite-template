import { ERROR_MESSAGES } from '../constants/error-messages';
import { emailRegexp, phoneRegexp } from '../constants/regexp';
import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  password: Yup.string()
    .min(6, ERROR_MESSAGES.MIN_PASSWORD)
    .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, ERROR_MESSAGES.MIN_NAME)
    .max(50, ERROR_MESSAGES.MAX_NAME)
    .required(ERROR_MESSAGES.REQUIRED_NAME),
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  password: Yup.string()
    .min(6, ERROR_MESSAGES.MIN_PASSWORD)
    .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
});

export const BookingSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, ERROR_MESSAGES.MIN_NAME)
    .max(20, ERROR_MESSAGES.MAX_NAME)
    .required(ERROR_MESSAGES.REQUIRED_NAME),
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  number: Yup.string()
    .min(12, ERROR_MESSAGES.MIN_PHONE)
    .matches(phoneRegexp, ERROR_MESSAGES.MIN_PHONE)
    .required(ERROR_MESSAGES.REQUIRED_PHONE),
});
