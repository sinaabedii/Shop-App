import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <form class="mx-auto">
      <label
        for="default-search"
        class="mb-20 text-sm font-medium text-zinc-900 sr-only "
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <ImSearch class="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          class="block w-full p-4 ps-10 text-sm text-zinc-700 border outline-none border-zinc-200 rounded-lg bg-zinc-200 placeholder:text-zinc-600 "
          placeholder="Search ..."
        />
        <button
          type="submit"
          onClick={searchHandler}
          class="text-white absolute end-2.5 bottom-2.5 bg-zinc-600 hover:bg-zinc-700 font-medium rounded-lg text-sm px-4 py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
