import { Fragment } from 'react';

interface TypeTwoSectionProps {
  smallText: string;
  title: string;
  description: string;
  elements: JSX.Element[];
}

const TypeTwoSection = ({
  smallText,
  title,
  description,
  elements,
}: TypeTwoSectionProps) => {
  return (
    <div className="flex flex-1 items-center flex-col w-full px-8 md:px-36">
      <div className="flex flex-1 self-start flex-col">
        <span className="text-secondary-500 text-sm font-sans">
          {smallText}
        </span>
        <h1 className="text-primary-300 font-bold text-xl uppercase">
          {title}
        </h1>
        <span className="text-black mt-5">{description}</span>
      </div>
      {elements.map((element, index) => (
        <Fragment key={index}>{element}</Fragment>
      ))}
    </div>
  );
};

export default TypeTwoSection;
