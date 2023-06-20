import React from 'react';
import Image from 'next/image';
import dogEating from '../public/images/dog-eating.png';
import dogFood from '../public/images/dog-food.png';
import dog from '../public/images/dog.png';
import puppyChiot from '../public/images/puppy-chiot.png';
import firstChoiceNutritionBrand from '../public/images/1st-choice-nutrition.png';
import animatedDog from '../public/svg/animated-dog.svg';
import animatedDogAlt from '../public/images/animated-dog-second-section.png';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import TypeOneSection from '../components/TypeOneSection';
import ProductGridWithImage from '../components/ProductGridWithImage';
import ProductCard from '../components/ProductCard';
import InlineElementGroup from '../components/InlineElementGroup';
import Footer from '../components/Footer';
import TypeTwoSection from '../components/TypeTwoSection';
import Grid from '../components/Grid';
import ServiceCard from '../components/ServiceCard';
import catImage from '../public/images/cat.png';

function HomePage() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col dark:bg-black">
      <TopBar />
      <Navbar />
      <Header />
      <div className="mt-28 md:mt-24 mb-20 md:mb-16">
        <TypeOneSection
          smallText="Lorem ipsum dolor sit amet."
          title="Una gran variedad de categorías"
          elements={[
            <InlineElementGroup
              additionalClasses="mt-11"
              elements={[
                'Perros',
                'Gatos',
                'Peces',
                'Roedores',
                'Reptiles',
                'Placeholder',
              ].map((text, index) => (
                <div key={index} className="flex flex-1 flex-col">
                  <Image alt="Animated Dog Image" src={animatedDog} />
                  <span className="text-center mt-3 font-semibold">{text}</span>
                </div>
              ))}
            />,
          ]}
        />
      </div>
      <TypeOneSection
        smallText="Lorem ipsum dolor sit amet."
        title="Productos destacados"
        elements={[
          <ProductGridWithImage
            image={catImage}
            additionalClasses="mt-5"
            products={Array.from({ length: 6 }).map((_value, index) => (
              <ProductCard
                key={index}
                image={<Image alt="Product Image" src={puppyChiot} />}
                name="1st Choice Puppy Chiot"
                rating={3}
                price={9.99}
                showAddToCartButton
              />
            ))}
          />,
        ]}
      />
      <div className="flex flex-1 flex-row w-full justify-center my-10 lg:my-20 px-36">
        <Image
          className="hidden lg:block w-full h-auto"
          alt="Dog Eating Image"
          src={dogEating}
        />
        <Image
          className="hidden lg:block w-full h-auto"
          alt="Dog Food Image"
          src={dogFood}
        />
      </div>
      <TypeOneSection
        smallText="Lorem ipsum dolor sit amet."
        title="Productos populares"
        elements={[
          <div className="flex flex-1 flex-col flex-wrap justify-center items-center sm:flex-row lg:flex-nowrap md:items-start gap-y-16 lg:gap-y-0 gap-x-12 mt-10 self-center md:self-start">
            {Array.from({ length: 5 }).map((_value, index) => (
              <ProductCard
                key={index}
                image={<Image alt="Product Image" src={puppyChiot} />}
                name="1st Choice Puppy Chiot"
                rating={3}
                price={9.99}
                showAddToCartButton
              />
            ))}
          </div>,
        ]}
      />
      <div className="flex flex-1 flex-row w-full justify-center my-10 lg:my-20 px-36">
        <Image
          className="hidden lg:block w-full h-auto"
          alt="Dog Image"
          src={dog}
        />
      </div>
      <TypeOneSection
        smallText="Lorem ipsum dolor sit amet."
        title="Últimos productos"
        elements={[
          <ProductGridWithImage
            image={catImage}
            additionalClasses="mt-5"
            reverseOrder
            products={Array.from({ length: 6 }).map((_value, index) => (
              <ProductCard
                key={index}
                image={<Image alt="Product Image" src={puppyChiot} />}
                name="1st Choice Puppy Chiot"
                rating={3}
                price={9.99}
                showAddToCartButton
              />
            ))}
          />,
        ]}
      />
      <div className="mt-20">
        <TypeTwoSection
          smallText="Lorem ipsum dolor sit amet."
          title="Nuestros servicios"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed."
          elements={[
            <Grid
              additionalClasses="mt-10 gap-28 items-baseline lg:gap-x-24 lg:gap-y-12"
              additionalElementContainerClasses="flex-1 basis-1/4"
              elements={[
                'Peluquería',
                'Odontología',
                'Veterinario',
                'Entrenamiento',
                'Psicología canina',
                'Fiestas de cumpleaños',
              ].map((title, index) => (
                <ServiceCard
                  key={index}
                  image={
                    <Image
                      alt="Animated Dog Image"
                      src={animatedDogAlt}
                      className="self-center md:self-start"
                    />
                  }
                  title={title}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi."
                />
              ))}
            />,
          ]}
        />
      </div>
      <div className="mt-20 md:mt-32">
        <TypeOneSection
          smallText="Lorem ipsum dolor sit amet."
          title="Trabajamos con las mejores marcas"
          elements={[
            <div className="flex flex-col items-center md:items-start lg:flex-row gap-4 mt-9">
              <div className="md:basis-1/3">
                <p className="text-black text-base font-sans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  velit ut viverra fames sed.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <InlineElementGroup
                  elements={Array.from({ length: 4 }).map((_value, index) => (
                    <Image
                      key={index}
                      alt="1st Choice Brand Image"
                      src={firstChoiceNutritionBrand}
                    />
                  ))}
                />
              </div>
            </div>,
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
