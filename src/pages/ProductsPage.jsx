import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [serachParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitialQuery(serachParams));
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearch(query.search || "");
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <div className="grid w-full px-1">
        <div className="xl:flex lg:flex md:grid sm:grid xl:gap-0 lg:gap-0 md:gap-5 sm:gap-5 items-center border-b-2 pb-5 mb-2 mt-4 px-3 justify-between">
          <SideBar query={query} setQuery={setQuery} />
          <SearchBox
            search={search}
            setSearch={setSearch}
            setQuery={setQuery}
          />
        </div>
        <div>
          <div className="xl:grid xl:grid-cols-4 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-10 justify-between lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1  ">
            {!displayed.length && <Loader />}
            {displayed.map((p) => (
              <Card key={p.id} data={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
