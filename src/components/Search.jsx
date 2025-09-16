import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center w-full max-w-md mx-auto bg-[#0A0A0A] border border-gray-800 rounded-full px-4 py-2 shadow-sm">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow bg-transparent text-gray-100 placeholder-gray-500 outline-none"
      />
      <button
        type="button"
        className="ml-2 border border-gray-800 text-gray-100 font-semibold px-4 py-1 rounded-full hover:bg-gray-800 transition-colors"
      >
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default Search;
