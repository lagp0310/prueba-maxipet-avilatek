import Image from 'next/image';
import locationIconWhite from '../public/svg/location-icon-white.svg';
import arrowDown from '../public/svg/arrow-down.svg';
import instagramLogo from '../public/svg/instagram-logo.svg';
import twitterLogo from '../public/svg/twitter-logo.svg';
import facebookLogo from '../public/svg/facebook-logo.svg';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="w-full h-auto items-center md:max-h-[26px] bg-primary-300 flex flex-col md:flex-row justify-end gap-4 py-3 mb-4 md:py-1.5 md:mb-2">
      <button className="flex flex-row gap-2">
        <Image
          className="h-auto self-center"
          alt="Location Icon"
          src={locationIconWhite}
        />
        <span className="text-white font-medium text-xs self-center">
          Bello Monte
        </span>
        <Image
          className="h-auto self-center"
          alt="Arrow Down Icon"
          src={arrowDown}
        />
      </button>
      <div className="flex flex-row gap-8 mt-2 md:mt-0 md:gap-4 md:mr-12">
        <Link href="#">
          <Image className="h-auto" alt="Instagram Logo" src={instagramLogo} />
        </Link>
        <Link href="#">
          <Image className="h-auto" alt="Twitter Logo" src={twitterLogo} />
        </Link>
        <Link href="#">
          <Image className="h-auto" alt="Facebook Logo" src={facebookLogo} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
