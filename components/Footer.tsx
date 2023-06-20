import Image from 'next/image';
import Link from 'next/link';
import instagramLogo from '../public/svg/instagram-grey.svg';
import twitterLogo from '../public/svg/twitter-grey.svg';
import facebookLogo from '../public/svg/facebook-grey.svg';
import avilaIcon from '../public/svg/avila-icon.svg';
import dogHouse from '../public/svg/dog-house.svg';
import tree from '../public/svg/tree.svg';

const myAccountLinks = [
  { text: 'Información personal', url: '#' },
  { text: 'Direcciones', url: '#' },
  { text: 'Mascotas', url: '#' },
  { text: 'Órdenes', url: '#' },
  { text: 'Agenda', url: '#' },
];

const informationLinks = [
  { text: 'Formulario de contacto', url: '#' },
  { text: 'Preguntas frecuentes', url: '#' },
  { text: 'Términos y condiciones', url: '#' },
  { text: 'Política de privacidad', url: '#' },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#FCFCFC] mt-16 px-8 lg:px-16 pt-16">
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="flex flex-1 flex-col md:basis-full lg:basis-20 lg:mr-32">
            <h1 className="text-primary-300 text-lg font-semibold mb-5">
              Sobre nosotros
            </h1>
            <p className="text-secondary-500 text-sm font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>
          <div className="flex flex-1 flex-col md:basis-full lg:basis-auto mt-8 md:mt-0">
            <h1 className="text-primary-300 text-lg font-semibold mb-5">
              Mi cuenta
            </h1>
            {myAccountLinks.map(({ text, url }, index) => (
              <div key={index}>
                <Link href={url} className="text-secondary-500 font-sans">
                  {text}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col md:basis-full lg:basis-auto mt-8 md:mt-0">
            <h1 className="text-primary-300 text-lg font-semibold mb-5">
              Información
            </h1>
            {informationLinks.map(({ text, url }, index) => (
              <div key={index}>
                <Link href={url} className="text-secondary-500 font-sans">
                  {text}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col md:basis-full lg:basis-auto mt-8 md:mt-0">
            <h1 className="text-primary-300 text-lg font-semibold mb-5">
              Atención al cliente
            </h1>
            <span className="text-secondary-500 mb-2.5 font-sans">
              Bello Monte, calle XXXX, local 1
            </span>
            <span className="text-secondary-500 mb-2.5 font-sans">
              (0212) 575 54 12
            </span>
            <span className="text-secondary-500 mb-2.5 font-sans">
              soporte@maxipet.com
            </span>
            <span className="text-secondary-500 mb-2.5 font-sans">
              Lunes a Viernes
            </span>
            <span className="text-secondary-500 mb-2.5 font-sans">
              9:00 a.m. - 5:00 p.m.
            </span>
            <div className="flex flex-1 flex-row gap-8 mt-2 mb-4 lg:mt-0 lg:gap-4 lg:mb-0">
              <Link href="#">
                <Image
                  className="h-auto"
                  alt="Instagram Logo"
                  src={instagramLogo}
                />
              </Link>
              <Link href="#">
                <Image
                  className="h-auto"
                  alt="Twitter Logo"
                  src={twitterLogo}
                />
              </Link>
              <Link href="#">
                <Image
                  className="h-auto"
                  alt="Facebook Logo"
                  src={facebookLogo}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full lg:gap-x-[600px] mt-3.5 -mb-px">
        <Image
          className="flex-1 max-h-10 lg:max-h-16"
          alt="Dog House"
          src={dogHouse}
        />
        <Image className="flex-1 max-h-10 lg:max-h-16" alt="Tree" src={tree} />
      </div>
      <div className="w-full h-auto lg:max-h-10 bg-primary-300 pb-4">
        <div className="flex flex-1 flex-col md:flex-row md:gap-3 w-full justify-center items-center">
          <span className="text-white py-3 lg:py-2.5 text-sm font-normal font-sans text-center px-8 md:px-0">
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados.
            Desarrollado por Avila Tek
          </span>
          <Image className="h-auto" alt="Ávila Logo" src={avilaIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
