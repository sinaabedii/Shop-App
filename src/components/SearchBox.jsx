import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className="flex ">
      <input
        className="border-2 border-dashed border-zinc-400 p-2 w-64 text-sm text-black rounded-xl mr-3 focus:outline-none"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button
        className="p-3 text-lg bg-zinc-700 text-white border-none rounded-xl cursor-pointer"
        onClick={searchHandler}
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
