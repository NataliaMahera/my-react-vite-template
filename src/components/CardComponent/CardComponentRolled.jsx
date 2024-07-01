import { AvatarGenerator } from 'random-avatar-generator';
import sprite from '../../assets/icons/sprite.svg';

const generator = new AvatarGenerator();

const CardComponentRolled = ({ teacher }) => {
  const { reviews, experience } = teacher || {};

  return (
    <>
      <p className=" mb-[32px]">{experience}</p>
      <ul className="flex flex-col gap-[32px]">
        {reviews?.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
          <li key={idx}>
            <div className="flex gap-[12px]">
              <img
                src={generator.generateRandomAvatar()}
                alt={reviewer_name}
                className="w-[44px] h-[44px] rounded-[50%] bg-secondary-accent-color"
              />
              <div className="text-[16px] leading-[1.5] font-medium">
                <p className="text-card-text-color">{reviewer_name}</p>
                <div className="flex justify-center items-center gap-[8px]">
                  <svg
                    className="w-[16px] h-[16px] fill-accent-color"
                    aria-label="star icon"
                  >
                    <use href={sprite + '#icon-star'}></use>
                  </svg>
                  <p className="text-[14px] leading-[1.29] font-medium text-primary-text-color">
                    {reviewer_rating}.0
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-[16px]">{comment}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardComponentRolled;
