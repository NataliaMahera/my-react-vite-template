import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import { HOME_ROUTE } from '../../constants/routes';

const Footer = () => {
  return (
    <footer className="flex flex-wrap min-w-[448px] py-[20px] justify-around items-center gap-y-[20px]">
      <div className="flex flex-wrap justify-center items-center gap-x-1 mx-auto">
        <Link
          to={HOME_ROUTE}
          className="flex gap-x-[8px] justify-center items-center"
        >
          <svg className="w-[22px] h-[22px] md:w-[20px] md:h-[20px]">
            <use href={sprite + '#icon-ukraine'}></use>
          </svg>
          <p className="font-medium text-primary-text-color text-[16px] leading-[1.12] md:text-[16px] md:leading-[1.2]">
            LearnLingo
          </p>
        </Link>
        | Developed by
        <Link
          className="font-semibold"
          to="https://github.com/NataliaMahera"
          target="_blank"
        >
          Natalia Mahera
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
