import Image from 'next/image';
import searchIcon from '../public/svg/search-icon.svg';

const SearchBar = () => {
  return (
    <div className="flex flex-1 flex-row rounded border border-secondary-200 py-2">
      <label className="relative block w-full">
        <input
          placeholder="Buscador"
          type="text"
          name="search"
          className="py-0 border-0 focus:outline-none focus:ring-0 placeholder:justify-start placeholder:w-full placeholder:text-secondary-200"
        />
        <button className="absolute flex inset-y-1 md:inset-y-0.5 right-0 mr-2.5">
          <Image
            className="h-auto justify-end"
            alt="Search Icon"
            src={searchIcon}
          />
        </button>
      </label>
    </div>
  );
};

export default SearchBar;
