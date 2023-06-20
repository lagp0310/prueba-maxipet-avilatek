import Image from 'next/image';
import headerDog from '../public/images/header-dog.png';
import { Fragment } from 'react';

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        className="w-full h-auto justify-end"
        alt="Dog Image"
        src={headerDog}
      />
      <div className="flex flex-1 flex-row gap-4 -mt-8">
        {Array.from({ length: 4 }).map((_value, index) => (
          <Fragment key={index}>
            {index === 1 ? (
              <button className="h-1.5 w-[50px] bg-primary-300 rounded"></button>
            ) : (
              <button
                key={index}
                className="h-1.5 w-[50px] bg-secondary-100 rounded"
              ></button>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
