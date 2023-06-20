import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import maxipetLogo from '../public/images/maxipet-logo.png';
import SearchBar from './SearchBar';
import locationIcon from '../public/svg/location-icon.svg';
import petIcon from '../public/svg/pet-icon.svg';
import userIcon from '../public/svg/user-icon.svg';
import shoppingCartWithBadgeIcon from '../public/svg/shopping-cart-with-badge.svg';
import menuIcon from '../public/svg/menu-icon.svg';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

interface LinkProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const LinkElements = ({ setMenuOpen }: LinkProps) => {
  return (
    <>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Inicio
      </Link>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Comprar por marca
      </Link>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Comprar por mascota
      </Link>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Nuestros servicios
      </Link>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Promociones
      </Link>
      <Link
        href="#"
        className="text-secondary-600 font-medium text-sm"
        onClick={() => setMenuOpen(false)}
      >
        Nosotros
      </Link>
    </>
  );
};

const AdditionalLinks = ({ setMenuOpen }: LinkProps) => {
  return (
    <>
      <Link href="#" onClick={() => setMenuOpen(false)}>
        <Image className="h-auto" alt="Location Icon" src={locationIcon} />
      </Link>
      <Link href="#" onClick={() => setMenuOpen(false)}>
        <Image className="h-auto" alt="Pet Icon" src={petIcon} />
      </Link>
      <Link href="#" onClick={() => setMenuOpen(false)}>
        <Image className="h-auto" alt="User Icon" src={userIcon} />
      </Link>
      <Link href="#" onClick={() => setMenuOpen(false)}>
        <Image
          className="h-auto"
          alt="Shopping Cart Icon"
          src={shoppingCartWithBadgeIcon}
        />
      </Link>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  return (
    <div className="flex flex-1 flex-col items-center w-full shadow-md pb-2 z-10">
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        duration={200}
        className="flex flex-col gap-4 p-4"
      >
        <Link href="/" className="self-center" onClick={() => setIsOpen(false)}>
          <Image
            className="h-auto max-h-12"
            alt="Maxipet Logo"
            src={maxipetLogo}
          />
        </Link>
        <hr />
        <LinkElements setMenuOpen={setIsOpen} />
        <hr />
        <div className="flex flex-row gap-4 justify-center">
          <AdditionalLinks setMenuOpen={setIsOpen} />
        </div>
      </Drawer>
      <div className="flex flex-1 flex-col lg:flex-row justify-center w-full gap-y-4 lg:gap-y-0 lg:gap-x-40 xl:gap-x-80 items-center mb-4 lg:mb-0">
        <div className="flex flex-1 flex-row">
          <button
            onClick={toggleDrawer}
            className="lg:hidden flex-0 px-4 absolute left-0 mt-3"
          >
            <Image alt="Mobile Menu Icon" src={menuIcon} />
          </button>
          <Link href="/" className="flex-1">
            <Image
              className="flex-1 h-auto max-h-12 justify-center lg:pl-16"
              alt="Maxipet Logo"
              src={maxipetLogo}
            />
          </Link>
        </div>
        <SearchBar />
        <div className="hidden lg:flex flex-1 gap-4 justify-end items-center lg:pr-16">
          <AdditionalLinks setMenuOpen={setIsOpen} />
        </div>
      </div>
      <div className="hidden lg:flex flex-1 flex-col items-center gap-6 mb-2 lg:mb-0 lg:items-start lg:flex-row lg:gap-16 xl:gap-24 justify-center w-full mt-5">
        <LinkElements setMenuOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
