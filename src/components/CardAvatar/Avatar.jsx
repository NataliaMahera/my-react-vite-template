import sprite from '../../assets/icons/sprite.svg';

const Avatar = ({ teacher }) => {
  const { name, surname, avatar_url } = teacher || {};
  return (
    <div className="mb-[8px] relative p-[12px] flex justify-center items-center max-w-[120px] max-h-[120px] rounded-[50%] border-[3px] border-secondary-accent-color">
      <img
        className="block h-auto max-w-full rounded-[50%] bg-secondary-accent-color "
        src={avatar_url}
        alt={`${name}, ${surname}`}
      />
      <svg className="absolute top-[17px] right-[20px] fill-green-color w-[12px] h-[12px] rounded-[50%] border-[2px] border-bg-color">
        <use href={`${sprite}#icon-green-point`} />
      </svg>
    </div>
  );
};

export default Avatar;
