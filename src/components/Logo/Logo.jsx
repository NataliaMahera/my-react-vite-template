import { Link } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import { HOME_ROUTE } from '../../constants/routes';

const Logo = () => {
  return (
    <Link to={HOME_ROUTE} className="flex gap-x-[8px] items-center">
      <svg className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
        <use href={sprite + '#icon-ukraine'}></use>
      </svg>
      <p className="font-medium text-primary-text-color text-[16px] leading-[1.12] md:text-[20px] md:leading-[1.2]">
        LearnLingo
      </p>
    </Link>
  );
};

export default Logo;
