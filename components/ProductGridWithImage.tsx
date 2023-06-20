import Image, { StaticImageData } from 'next/image';
import Grid from './Grid';

interface ProductGridWithImageProps {
  image: StaticImageData;
  reverseOrder?: boolean;
  products: JSX.Element[];
  additionalClasses?: string;
}

const ProductGridWithImage = ({
  image,
  reverseOrder,
  products,
  additionalClasses,
}: ProductGridWithImageProps) => {
  return (
    <div
      className={`flex flex-1 flex-row w-full gap-16 lg:justify-center xl:justify-start ${
        additionalClasses ?? ''
      }`}
    >
      <Image
        className={`hidden xl:flex xl:flex-1 w-full h-auto max-w-md ${
          reverseOrder ? 'order-1' : 'order-none'
        }`}
        alt="Side Image"
        src={image}
      />
      <Grid
        columns={3}
        additionalClasses="gap-x-10 gap-y-16 pt-5"
        elements={products}
      />
    </div>
  );
};

export default ProductGridWithImage;
