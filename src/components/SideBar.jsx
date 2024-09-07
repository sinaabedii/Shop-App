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
    <div className="-mt-1">
      <ul
        className="flex overflow-auto gap-2 px-2 bg-slate-200 justify-between"
        onClick={categoryHandler}
      >
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? "my-auto text-sm text-zinc-600 cursor-pointer "
                : "py-1.5 cursor-pointer text-sm text-zinc-400"
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
