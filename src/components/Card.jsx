import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineStar } from "react-icons/md";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

import { productQuantity, shortenText } from "../helper/helper";
import { useCart } from "../context/CartContext";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function Card({ data, handleLikedList }) {
  const { id, title, image, price, rating } = data;
  const [state, dispatch] = useCart();
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productQuantity(state, id);

  return (
    <div className="p-3 shadow-xl rounded-2xl mt-5  cursor-pointer ">
      <button className="float-right" onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
      <Link to={`/products/${id}`}>
        <img
          className="w-52 h-52 justify-center items-center bg-transparent mx-auto rounded-xl"
          src={image}
          alt={title}
        />
      </Link>
      <div className="mx-2 mt-1">
        <span className="flex w-28 mt-3 mb-1 justify-center rounded-md py-1 items-center gap-1 bg-zinc-200">
          <FaTruck />
          <p className="text-xs">Free Shipping</p>
        </span>
        <h3 className="text-lg text-zinc-700 font-bold">
          {shortenText(title)}
        </h3>
        <div className="flex justify-between mb-3 border-b-2 pb-2">
          <p className="font-semibold text-gray-500">{price} $</p>
          <span className="flex items-center gap-1 ">
            <p>{rating.rate}</p>
            <MdOutlineStar className="w-5 h-5 text-amber-400" />
          </span>
        </div>
        <div className="flex items-center gap-1 justify-between">
          <Link to={`/products/${id}`}>
            <TbListDetails className="w-7 h-7 rounded-sm" />
          </Link>
          <div className="flex items-center gap-2 ">
            {quantity === 1 && (
              <button
                onClick={() => clickHandler("REMOVE_ITEM")}
                className="bg-zinc-700 px-1 text-white border-none text-2xl h-8 w-8 leading-8 rounded-lg cursor-pointer"
              >
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button
                className="bg-zinc-700 px-1 text-white border-none text-4xl h-8 w-8 leading-8  rounded-lg cursor-pointer"
                onClick={() => clickHandler("DECREASE")}
              >
                -
              </button>
            )}
            {!!quantity && <span className="text-2xl">{quantity}</span>}
            {quantity === 0 ? (
              <button
                onClick={() => clickHandler("ADD_ITEM")}
                className="bg-zinc-700 px-1 text-white border-none text-2xl h-8 w-8 leading-8  rounded-lg cursor-pointer"
              >
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button
                className="bg-zinc-700 px-1 text-white border-none text-2xl h-8 w-8 leading-8  rounded-lg cursor-pointer"
                onClick={() => clickHandler("INCREASE")}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
