interface GridProps {
  elements: JSX.Element[];
  additionalClasses?: string;
  additionalElementContainerClasses?: string;
}

const Grid = ({
  elements,
  additionalClasses,
  additionalElementContainerClasses,
}: GridProps) => {
  return (
    <div
      className={`flex flex-1 flex-col sm:flex-row sm:justify-center flex-wrap items-center md:items-start lg:justify-start ${
        additionalClasses ?? ''
      }`}
    >
      {elements.map((element, index) => (
        <div key={index} className={additionalElementContainerClasses}>
          {element}
        </div>
      ))}
    </div>
  );
};

export default Grid;
