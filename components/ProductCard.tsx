import Image from 'next/image';
import shoppingCartWhiteIcon from '../public/svg/shopping-cart-white.svg';
import filledDogPaw from '../public/svg/filled-dog-paw.svg';
import dogPaw from '../public/svg/dog-paw.svg';

interface ProductCardProps {
  image: JSX.Element;
  name: string;
  rating: number;
  price: number;
  showAddToCartButton?: boolean;
}

const ProductCard = ({
  image,
  name,
  rating,
  price,
  showAddToCartButton,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-start text-center sm:text-left md:text-center">
      <div className="self-center sm:self-start md:self-end">{image}</div>
      <span className="mt-7 text-left">{name}</span>
      <div className="flex flex-1 flex-row gap-1 mt-1">
        {Array.from({ length: rating }).map((_value, index) => (
          <Image
            key={index}
            className="w-4 h-auto"
            alt="Filled Dog Paw Icon"
            src={filledDogPaw}
          />
        ))}
        {Array.from({ length: 5 - rating }).map((_value, index) => (
          <Image
            key={index}
            className="w-4 h-auto"
            alt="Dog Paw Icon"
            src={dogPaw}
          />
        ))}
      </div>
      <span className="font-normal text-sm mt-1">${price}</span>
      {showAddToCartButton && (
        <button className="flex flex-1 flex-row justify-center md:basis-1/4 rounded-[5px] bg-primary-300 py-1.5 px-5 gap-2 items-center mt-2.5 self-center md:self-end md:mr-5">
          <Image
            className="w-4 h-auto"
            alt="Shopping Cart Icon"
            src={shoppingCartWhiteIcon}
          />
          <span className="text-white font-medium text-xs">Agregar</span>
        </button>
      )}
    </div>
  );
};

export default ProductCard;
