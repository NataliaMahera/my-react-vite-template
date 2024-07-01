import sprite from '../../assets/icons/sprite.svg';

const CardComponentUnrolled = ({ teacher }) => {
  const { rating, price_per_hour, lessons_done } = teacher || {};
  return (
    <ul className="flex flex-wrap justify-start items-center gap-y-[8px] text-[16px] leading-[1.5] font-medium text-primary-text-color">
      <li className="flex items-center">
        <svg className="w-[16px] h-[16px] stroke-primary-text-color fill-none mr-[4px] ">
          <use href={`${sprite}#icon-book-open`} />
        </svg>
        <p className="descItem">Lessons online</p>
      </li>
      <li>
        <p className="descItem">Lessons done: {lessons_done}</p>
      </li>
      <li className="flex items-center">
        <svg className="w-[16px] h-[16px] fill-accent-color mr-[4px]">
          <use href={`${sprite}#icon-star`} />
        </svg>
        <p className="descItem">Rating: {rating}</p>
      </li>
      <li>
        <p>
          Price / 1 hour:{' '}
          <span className="text-green-color">{price_per_hour}$</span>
        </p>
      </li>
    </ul>
  );
};

export default CardComponentUnrolled;
