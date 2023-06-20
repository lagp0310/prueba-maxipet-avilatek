interface InlineElementGroupProps {
  elements: JSX.Element[];
  additionalClasses?: string;
}

const InlineElementGroup = ({
  elements,
  additionalClasses,
}: InlineElementGroupProps) => {
  return (
    <div
      className={`flex flex-1 flex-col flex-wrap justify-center items-center gap-8 sm:items-start sm:flex-row w-full md:items-center lg:flex-nowrap lg:gap-4 lg:justify-start ${
        additionalClasses ?? ''
      }`}
    >
      {elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  );
};

export default InlineElementGroup;
