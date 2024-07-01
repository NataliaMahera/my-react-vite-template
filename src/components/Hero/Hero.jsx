import { HERO_OPTIONS } from '../../constants';
import { TEACHERS_ROUTE } from '../../constants/routes';
import { HeroButton } from '../ReUseComponents/Buttons/Buttons';
import girl from '../../assets/img/hero/girl-book.png';
import girl2x from '../../assets/img/hero/girl-book@2x.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-wrap min-w-[320px] flex mx-auto w-full justify-between mb-[24px] items-center gap-y-[24px]">
        <div className="mx-auto max-w-[720px] min-w-[320px] bg-bg-color px-[64px] py-[98px] rounded-[30px]">
          <h1 className="mb-[32px] max-w-[548px] text-[48px] leading-[1.17] font-medium text-primary-text-color">
            Unlock your potential with the best{' '}
            <span className="bg-secondary-accent-color rounded-[8px] italic px-[8px]">
              language
            </span>{' '}
            tutors
          </h1>
          <p className="mb-[64px] max-w-[471px] text-[16px] leading-[1.37] text-primary-text-color">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <HeroButton
            onClick={() => {
              navigate(TEACHERS_ROUTE);
            }}
          >
            Get started
          </HeroButton>
        </div>
        <div className="mx-auto bg-secondary-accent-color rounded-[30px] max-w-[568px] ">
          <img srcSet={`${girl} 1x, ${girl2x} 2x`} src={girl} alt="girl" />
        </div>
      </div>
      <ul className="min-w-[320px] flex border-dashed gap-y-[20px] justify-around flex-wrap border-[2px] border-accent-color py-[40px] rounded-[30px] mb-[32px]">
        {HERO_OPTIONS.map(({ number, title, id }) => (
          <li key={id} className="hero-list-item">
            <p className="hero-num-desc">{number}</p>
            <p className="hero-desc">{title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Hero;
