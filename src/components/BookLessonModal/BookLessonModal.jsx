import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { BOOKING_OPTIONS } from '../../constants';
import { toast } from 'react-toastify';
import { styleToastify } from '../Toster/tostify';
import { BookingSchema } from '../../helpers/schemas';

const initialValues = {
  fullName: '',
  email: '',
  number: '',
  reason: BOOKING_OPTIONS[0].name,
};

const BookLessonModal = ({ closeModal, teacher }) => {
  const isLoading = useSelector(selectAuthIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  const handleBookingSubmit = (
    { reason, fullName, email, phone },
    { resetForm }
  ) => {
    try {
      console.log(reason, fullName, email, phone);
      resetForm();
      closeModal();
      toast.success('You successfully booked a trial lesson', styleToastify);
    } catch (error) {
      toast.error(
        'Oops something went wrong, check if you entered the data correctly',
        styleToastify
      );
    }
  };

  const { name, surname, avatar_url } = teacher || {};

  return (
    <>
      <h1 className="mb-[20px] text-[40px] leading-[1.2] font-medium text-primary-text-color">
        Book trial lesson
      </h1>
      <p className="mb-[20px] text-[16px] leading-[1.37] text-secondary-text-color">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="mb-[40px] flex gap-[14px]">
        <img
          src={avatar_url}
          alt={`${name}, ${surname}`}
          className="w-[44px] h-[44px] rounded-[50%] bg-secondary-accent-color"
        />
        <div className="text-[16px] leading-[1.5] font-medium text-primary-text-color">
          <h3 className="text-[12px] leading-[1.33] text-card-text-color">
            Your teacher
          </h3>
          <p>{`${name} ${surname}`}</p>
        </div>
      </div>
      <h2 className="text-[24px] leading-[1.33] text-primary-text-color font-medium mb-[20px]">
        What is your main reason for learning English?
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleBookingSubmit}
      >
        <Form autoComplete="off" className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[16px] mb-[22px]">
            {BOOKING_OPTIONS.map(({ name, id }) => (
              <div key={id} className="custom-radio">
                <Field
                  id={id}
                  type="radio"
                  name="reason"
                  value={name}
                  className="text-[16px] leading-[1.37] text-primary-text-color"
                />
                <label htmlFor={id} className="relative">
                  {name}
                </label>
              </div>
            ))}
          </div>

          <Field
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="input-form"
          />
          <ErrorMessage name="fullname" component="span" className="errorMsg" />
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
          <Field
            type="text"
            name="number"
            placeholder="Phone number"
            className="input-form"
          />
          <ErrorMessage
            name="number"
            component="span"
            className="errorMsg p-[px]"
          />
          <button
            type="submit"
            className="hover:bg-accent-color-btn focus:bg-accent-color-btn transition-colors text-[18px] leading-[1.56] font-bold mt-[22px] bg-accent-color p-y-[16px] w-full text-primary-text-color h-[60px] rounded-[12px] outline-none"
          >
            Book
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default BookLessonModal;
