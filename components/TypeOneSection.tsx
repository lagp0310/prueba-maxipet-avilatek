import { Fragment } from 'react';

interface TypeOneSectionProps {
  smallText: string;
  title: string;
  elements: JSX.Element[];
}

const TypeOneSection = ({
  smallText,
  title,
  elements,
}: TypeOneSectionProps) => {
  return (
    <div className="flex flex-1 items-center lg:items-start flex-col w-full px-8 md:px-36">
      <div className="flex flex-1 self-start flex-col">
        <span className="text-secondary-500 text-sm font-sans">
          {smallText}
        </span>
        <h1 className="text-primary-300 font-bold text-xl uppercase">
          {title}
        </h1>
      </div>
      {elements.map((element, index) => (
        <Fragment key={index}>{element}</Fragment>
      ))}
    </div>
  );
};

export default TypeOneSection;
