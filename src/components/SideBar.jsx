import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
import { categories } from "../constants/listCategory";

function SideBar({ setQuery, query }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
    if (tagName !== "LI") return;
  };
  return (
    <div className="sticky">
      <ul
        className="flex overflow-auto px-1 mb-1 justify-around"
        onClick={categoryHandler}
      >
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? "my-auto text-xs text-gray-100 py-1 rounded-md px-1 font-semibold bg-zinc-400 cursor-pointer"
                : "py-1 cursor-pointer text-zinc-800 rounded-md px-1 bg-zinc-300 text-xs"
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
