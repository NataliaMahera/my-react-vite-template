const CardComponentLevels = ({ teacher }) => {
  return (
    <ul className="flex flex-wrap gap-[8px] justify-start items-center mt-[32px]">
      {teacher.levels?.map((level, idx) => (
        <li
          key={idx}
          className={`py-[8px] px-[12px] rounded-[35px] border-[1px] border-decor-text-element ${
            idx === 0 && 'bg-accent-color border-none'
          }`}
        >
          <p className="text-[14px] leading-[1.14] font-medium text-primary-text-color">
            #{level}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CardComponentLevels;
