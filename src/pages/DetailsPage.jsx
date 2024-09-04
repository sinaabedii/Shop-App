import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductsContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);

  if (!productDetails) return <Loader />;

  return (
    <div className="xl:flex gl:flex md:grid sm:grid items-start">
      <div className="border-2 border-dashed border-slate-300 m-3 p-6 rounded-3xl">
        <img
          className="w-52 h-52 p-4 justify-center items-center mx-auto rounded-3xl m-3 "
          src={productDetails.image}
          alt={productDetails.title}
        />
        <h3 className="text-slate-700 font-semibold text-2xl mb-8">
          {productDetails.title}
        </h3>
        <p className="text-gray-500 text-lg mb-10">
          {productDetails.description}
        </p>
        <div className="grid gap-2 mb-1">
          <p className=" flex items-center">
            <SiOpenproject className="text-slate-700 mr-2" />
            {productDetails.category}
          </p>
          <span className="flex items-center -ml-1 gap-1 ">
            <MdOutlineStar className="w-6 h-6 text-amber-400" />
            <p>{productDetails.rating.rate}</p>
          </span>
        </div>
        <div className="flex justify-between ">
          <span className="flex items-center">
            <IoMdPricetag className="text-slate-700 mr-2" />
            {productDetails.price} $
          </span>
          <Link
            to="/products"
            className="flex items-center bg-yellow-500 py-1 px-2 rounded-xl animate-pulse"
          >
            <FaArrowLeft className="text-slate-700 mr-2 " />
            <span className="font-semibold">Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
