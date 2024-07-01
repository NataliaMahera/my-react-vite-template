import { NavLink } from 'react-router-dom';
import sprite from '../../../assets/icons/sprite.svg';

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          'font-normal transition-colors focus:text-accent-color-btn hover:text-accent-color-btn text-[14px} md:text-[16px] leading-[1.25] ' +
          (!isActive
            ? ' text-primary-text-color'
            : ' text-accent-color transition')
        );
      }}
    >
      {children}
    </NavLink>
  );
};

export const LoginBtn = ({ onClick }) => {
  return (
    <div className="flex gap-x-[8px] justify-center items-center">
      <svg className="fill-none stroke-[2px] stroke-accent-color w-[20px] h-[20px]">
        <use href={sprite + '#icon-log-in'}></use>
      </svg>
      <button
        type="submit"
        className="transition-colors focus:text-accent-color hover:text-accent-color text-[16px] leading-[1.25] font-bold text-primary-text-color"
        onClick={onClick}
      >
        Log in
      </button>
    </div>
  );
};

export const LogoutBtn = ({ onClick }) => {
  return (
    <div className="flex gap-x-[8px] justify-center items-center">
      <svg className="fill-none stroke-[2px] stroke-accent-color w-[20px] h-[20px]">
        <use href={sprite + '#icon-log-out'}></use>
      </svg>
      <button
        type="submit"
        className="transition-colors focus:text-accent-color hover:text-accent-color text-[16px] leading-[1.25] font-bold text-primary-text-color"
        onClick={onClick}
      >
        Log out
      </button>
    </div>
  );
};

export const RegisterBtn = ({ onClick }) => {
  return (
    <button
      type="submit"
      className="transition-colors bg-primary-text-color py-[10px] px-[17px] md:py-[14px] md:px-[39px] rounded-[12px] focus:text-accent-color hover:text-accent-color text-[16px] leading-[1.25] font-bold text-bg-color"
      onClick={onClick}
    >
      Registration
    </button>
  );
};

export const FormBtn = ({ children }) => {
  return (
    <button
      type="submit"
      className="transition-colors focus:bg-accent-color-btn hover:bg-accent-color-btn text-[18px] leading-[1.56] font-bold mt-[22px] bg-accent-color p-y-[16px] w-full text-primary-text-color h-[60px] rounded-[12px] outline-none"
    >
      {children}
    </button>
  );
};

export const CloseModalButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="absolute top-[20px] right-[20px]"
      onClick={onClick}
    >
      <svg className="stroke-[2.5px] stroke-primary-text-color w-[32px] h-[32px]">
        <use href={sprite + '#icon-close'}></use>
      </svg>
    </button>
  );
};

export const OpenEyeIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-icon-color"
    >
      <use href={sprite + '#icon-eye'}></use>
    </svg>
  );
};

export const BlockedEyeIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-icon-color "
    >
      <use href={sprite + '#icon-eye-blocked'}></use>
    </svg>
  );
};

export const ReadMoreButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="underline transition-colors focus:text-accent-color hover:text-accent-color"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const BookLessonButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="whitespace-nowrap mt-[32px] font-bold text-[18px} leading-[1.56] py-[16px] px-[48px] rounded-[12px] transition-colors bg-accent-color focus:bg-accent-color-btn  hover:bg-accent-color-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const LoadMoreButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="block m-auto mt-[64px] font-bold text-[18px} leading-[1.56] py-[16px] px-[48px] rounded-[12px] bg-accent-color transition-colors focus:bg-accent-color-btn hover:bg-accent-color-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const HeroButton = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="whitespace-nowrap block font-bold text-[18px} leading-[1.56] py-[16px] px-[80px] rounded-[12px] bg-accent-color transition-colors focus:bg-accent-color-btn hover:bg-accent-color-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ToggleFavoritesButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="absolute top-[24px] right-[24px] flex justify-start ease-in-out duration-100 hover:scale-[1.035] hover:contrast-[0.9] cursor-pointer "
      onClick={onClick}
    >
      <svg className="ease-in-out duration-100 focus:scale-[1.035] hover:scale-[1.035] focus:contrast-[0.9] hover:contrast-[0.9] fill-none stroke-[1.5px] stroke-primary-text-color w-[26px] h-[26px]">
        <use href={sprite + '#icon-heart'}></use>
      </svg>
    </button>
  );
};
