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
    <div className="xl:flex lg:flex md:grid sm:grid ">
      <div className="flex gap-2 mr-10 items-center ">
        <FaListUl />
        <p className="font-bold text-xl text-zinc-900">Categories</p>
      </div>
      <ul
        className="xl:flex lg:flex md:grid sm:grid gap-3 mt-1"
        onClick={categoryHandler}
      >
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? "font-semibold p-1 border-b-gray-500 border-b-2 rounded-t-md my-auto text-zinc-600 cursor-pointer "
                : "hover:border-b-gray-500 hover:border-b-2 p-1 cursor-pointer text-zinc-800 "
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
